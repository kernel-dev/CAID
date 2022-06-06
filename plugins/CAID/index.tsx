/// <reference path="../types/main.d.ts" />

import styles from "./main.scss";
import stylesheet from "styles";
import BasePlugin from "@zlibrary/plugin";
import { Users } from "@discord/stores";
import {
    Utilities,
    WebpackModules,
    Patcher,
    ContextMenu,
} from "@zlibrary";
import BdApi from "betterdiscord/api";
import { Modal } from "./components/Modal";
import { Settings } from "./Settings";
import { Util } from "./Util";

export default class CAIDInjector extends BasePlugin {
    private pluginSettings: Settings;
    private settings: SettingsData;
    private guilds: CAID;
    private id: string;

    public async onStart(): Promise<void> {
        this.guilds = {};
        stylesheet.inject();

        try {
            this.pluginSettings = new Settings();
            this.settings = this.pluginSettings.settings as SettingsData;
            this.id = Users.getCurrentUser().id;

            if (!this.id) {
                console.error("[CAID]: Unable to fetch current user ID, this should not happen.\nEXITING.");
                return;
            }

            this.patchAvatarUrl();
            this.patchDMContextMenu();
            this.patchGuildContextMenu();
        } catch (e) {
            console.error(e);
        }
    }

    public onStop(): void {
        return this.stop();
    }

    public stop(): void {
        console.log("[CAID]: Exiting...");

        stylesheet.remove();
        Patcher.unpatchAll();
        BdApi.saveData("CAID", "temporary", null);

        console.log("[CAID]: Successfully exited.");
    }

    public onSwitch(): void {
        this.pluginSettings.alter<CAID>(
            "guilds",
            this.pluginSettings.get<CAID>("guilds") || {}
        );
    }

    public patchAvatarUrl(): void {
        const Avatar = BdApi.findModuleByProps("getUserAvatarURL");

        Patcher.after(
            Avatar.default,
            "getUserAvatarURL",
            (_this, props, ret) => {
                const locationId = window.location.href.includes("@me")
                    ? window.location.href.split("/@me/")[1]
                    : window.location.href.split("/").filter((x) => x)[3];

                if (props[0].id !== this.id) return;

                return this.pluginSettings.get<CAID>("guilds")?.[locationId];
            }
        );
    }

    public patchDMContextMenu(): void {
        const findWithDefault = (filter) =>
            WebpackModules.getModule((m) => m && m?.default && filter(m.default));

        const DMContextMenu = findWithDefault(
            (m) => m?.displayName === "DMUserContextMenu"
        );

        if (!DMContextMenu) return;

        Patcher.after(
            DMContextMenu,
            "default",
            (_, [props], ret) => {
                const children = Utilities.getNestedProp(
                    ret,
                    "props.children.props.children"
                );

                if (!Array.isArray(children)) return;

                const { channel } = props;

                children.splice(
                    4,
                    0,
                    ContextMenu.buildMenuItem({
                        label: "Set Avatar URL",
                        action: () => {
                            BdApi.showConfirmationModal(
                                "Change Avatar",
                                <Modal

                                />,
                                {
                                    onConfirm: () => {
                                        try {
                                            let err = null;
                                            const value = this.pluginSettings.get<Nullable<boolean | string>>("temporary");

                                            if (value && typeof value === "boolean" && (value as boolean) === false)
                                                return this.pluginSettings.writeImageUrl(
                                                    channel.id,
                                                    null,
                                                    true
                                                );

                                            if (
                                                value &&
                                                value === this.pluginSettings.get<string>("original")
                                            ) return;

                                            if (!Util.validateUrl(value))
                                                return BdApi.showConfirmationModal(
                                                    "INVALID",
                                                    "Please specify a valid URL.",
                                                    { danger: true }
                                                );

                                            if (channel?.id && value)
                                                err = this.pluginSettings.writeImageUrl(
                                                    channel.id,
                                                    value as string
                                                );

                                            if (err) return console.error(err);

                                            BdApi.showConfirmationModal(
                                                "Success!",
                                                <div className={styles.successAvatarImg}>
                                                    Successfully established new avatar for DM channel
                                                    with {channel.rawRecipients[0].username}! <br />
                                                    (Change channels to apply it.)
                                                </div>,
                                                {}
                                            )

                                        } catch (e) {
                                            console.error(`[CAID]: Unknown error occurred. Please contact the plugin developer.\nStack: ${e}`);
                                        }
                                    },
                                    onCancel: () => console.log("Out of there!"),
                                    cancelText: "Back",
                                    confirmText: "Apply"
                                }
                            )
                        }

                    })
                )
            }
        )
    }

    public patchGuildContextMenu(): void {
        const findWithDefault = (filter) =>
            WebpackModules.getModule((m) => m && m?.default && filter(m.default));

        const GuildContextMenu = findWithDefault(
            (m) => m?.displayName === "GuildContextMenu"
        );

        if (!GuildContextMenu) return;

        Patcher.after(
            GuildContextMenu,
            "default",
            (_, [props], ret) => {
                const children = Utilities.getNestedProp(ret, "props.children");
                if (!Array.isArray(children)) return;

                const { guild } = props;

                const menu = ContextMenu.buildMenuItem({
                    label: "Set Avatar URL",
                    action: () => {
                        BdApi.showConfirmationModal(
                            "Change Avatar",
                            <Modal
                                settings={this.pluginSettings}
                                data={guild}
                                type={"guild"}
                            />,
                            {
                                onConfirm: () => {
                                    try {
                                        let err = null;
                                        const val = this.pluginSettings.get("temporary");

                                        if (typeof val === "boolean" && val === false)
                                            return this.pluginSettings.writeImageUrl(
                                                guild.id,
                                                null,
                                                true
                                            );

                                        if (val && val === this.pluginSettings.get("original"))
                                            return;

                                        if (
                                            !val ||
                                            (val?.length &&
                                                !val.match(/\.(jpg|jpeg|png|webp|svg|gif)/gi)?.length)
                                        )
                                            return BdApi.showConfirmationModal(
                                                "INVALID",
                                                "Please specify a valid URL!",
                                                { danger: true }
                                            );

                                        if (guild?.id && val)
                                            err = this.pluginSettings.writeImageUrl(guild.id, val);

                                        if (err) return console.error(err);

                                        BdApi.showConfirmationModal(
                                            `Success!`,
                                            <div className={styles.successAvatarImg}>
                                                Successfully established new avatar for {guild.name}!{" "}
                                                <br />
                                                (Change channels to fully apply it.)
                                            </div>,
                                            {}
                                        );
                                    } catch (e) {
                                        console.error(
                                            `Unknown error occurred. Please contact the plugin developer and report the issue.\n\n[STACK]: ${e.message}`
                                        );
                                    }
                                },
                                onCancel: () => console.log("Out of there!"),
                                cancelText: "Back",
                                confirmText: "Apply",
                            }
                        );
                    },
                });

                children.splice(4, 0, menu);
            }
        )
    }
}