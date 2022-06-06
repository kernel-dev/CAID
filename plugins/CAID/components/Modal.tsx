import { ReactTools, Settings } from "@zlibrary";
import { Settings as PluginSettings } from "../Settings";
import BdApi from "betterdiscord/api";
import styles from "../main.scss";

export const Modal = (
    { data, type, settings }: 
    { data: any; type: "dm" | "guild"; settings: PluginSettings }
) => {
    if (!(settings instanceof PluginSettings))
        return console.error(
            new Error("'settings' property must of type 'PluginSettings'!")
        );

    if (!["dm", "guild"].some((t) => type.toLowerCase() == t))
        return console.error(
            "'type' property must be either 'guild' or 'dm'!" // This should never happen.
        );

    const dmDisabled = settings.get<boolean>("dmDisabled");
    const guildDisabled = settings.get<boolean>("guildDisabled");

    const [{ url, disabled, timeout }, setProps] = React.useState({
        url: "",
        disabled: type && type.toLowerCase() === "dm" ? dmDisabled : guildDisabled,
        timeout: null
    });

    return (
        <div
            className="AvatarPanel"
            children={[
                ReactTools.createWrappedElement(
                    new Settings.Textbox(
                        "",
                        disabled || !url ? null : (
                            <a
                                onClick={() => {
                                    BdApi.findModuleByProps("closeModal").closeModal(
                                        settings.get(`${type}Disabled`)
                                    );

                                    return settings.writeImageUrl(data.id, null, true);
                                }}
                                className="reset-avatar"
                            >
                                Reset Avatar
                            </a>
                        ),
                        url,
                        (value) => {
                            settings.alter<string>("temporary", value);
                            clearTimeout(timeout);
                            setProps({
                                timeout: setTimeout(
                                    () => setProps({ url: value, disabled }),
                                    500
                                )
                            });
                        },
                        {
                            placeholder: "Enter URL",
                            disabled
                        }
                    ).getElement()
                ),
            !url ? null : <img src={url} className={styles.AvatarImg} />,
            url ? null : ReactTools.createWrappedElement(
                new Settings.Switch(
                    "Disabled",
                    "",
                    disabled,
                    (_disabled) => {
                        setProps({ url, disabled: _disabled });
                        settings.alter<string>("temporary", settings.get<string>("original")!);
                        settings.alter<boolean>(`${type}Disabled`, _disabled);
                        settings.writeImageUrl(
                            data.id,
                            _disabled === true
                                ? settings.get<string>("original")!
                                : settings.get<CAID>("guilds")[data.id],
                            false
                        );
                        settings.writeDisableConfig(type, _disabled);
                    }
                ).getElement()
            )
            ]}
        />
    )
}