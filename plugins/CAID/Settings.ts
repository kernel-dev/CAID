import { Users } from "@discord/stores";
import BdApi from "betterdiscord/api"
import * as path from "path";
import {
    statSync,
    readdirSync,
    writeFileSync,
    readFileSync,
    watch,
} from "fs";

export class Settings {
    public settings: SettingsData | {};
    
    public constructor() { 
        this.settings = {};
		this.set();
		this.load();
    }

    public alter<T>(
		property: string, 
		value: Nullable<T> = null, 
		subValue: Nullable<string> = null
	): void {
        if (value == null)
            return;

        if (!this.isPresent(property, subValue))    
            subValue != null
                ? this.settings[property][subValue] = value
                : this.settings[property] = value
    }

    public get<T>(
		property: string, 
		subValue: Nullable<string> = null
	): Nullable<T> {
        try {
            return (
                subValue != null
                    ? this.settings[property][subValue]
                    : this.settings[property]
            )
        } catch { return null; }
    }

	/**
	 * Returns an error, or nothing if it successfully updated.
	 */
	public writeImageUrl(
		id: string,
		imageUrl: Nullable<string>,
		deleteEntry: boolean = false
	): Error | void {
		if (!id) return new Error("'id' value not provided!");

		try {
			if (!Object.keys(this.get("guilds")!).length)
				this.alter<CAID>(
					"guilds",
					{}
				);

			if ((this.get<CAID>("guilds")![id] && deleteEntry) || imageUrl == null) {
				delete this.get<CAID>("guilds")![id];

				this.alter<CAID>("guilds", (this.get<Nullable<CAID>>("guilds") || {}) as Nullable<CAID>);

				return writeFileSync(this.get("path")!, JSON.stringify(this.settings, null, 2));
			}

			Object.keys(this.get("guilds") || {}).length
				? this.alter<string>("guilds", imageUrl, id)
				: this.alter<CAID>("guilds", { [id]: imageUrl })

			writeFileSync(this.get("path")!, JSON.stringify(this.settings, null, 2));
		} catch (e) { return e; }
	}

	public writeDisableConfig<T>(
		type: "guild" | "dm",
		disabled: boolean
	): void {
		if (
			!type ||
			typeof type != "string" ||
			!["guild", "dm"].some((t) => type.toLowerCase() == t)
		)
			return console.error(
				"[CAID_CONFIG]: Invalid value for 'disabled'! Must be 'guild' or 'dm'!"
			);
		
		this.alter<boolean>(`${type}Disabled`, disabled);

		writeFileSync(this.get("path")!, JSON.stringify(this.settings, null, 2));
	}

	private findConfig(pluginsPath: string = BdApi.Plugins.folder): Nullable<string> {
		let found: Nullable<string> = null;

		try {
			const results = readdirSync(pluginsPath);

			for (const result of results) {
				if (found != null) break;

				const stat = statSync(path.join(pluginsPath, result));

				if (stat.isDirectory()){
					this.findConfig(path.join(pluginsPath, result));
					continue;
				} else {
					if (result.match(/caid\s?\.config\s?\.json/gi)?.length)
						found = path.join(pluginsPath, result);
				}
			}
		} catch {
			console.error("Unable to find configuration file.");
		}

		return found;
	}

	private load(): void {
		const home = BdApi.Plugins.folder as string;

		this.alter<string>("path", this.findConfig(home));

		if (this.get("path") == null) return;
		
		delete window.require.cache[window.require.resolve(this.get("path")!)];
		this.alter<CAID>("guilds", this.get<CAID>("guilds") || {});

		const watcher = watch(this.get("path")!)

		watcher.on("change", () => {
			this.alter<CAID>("guilds", {} as CAID)
			delete window.require.cache[window.require.resolve(this.get("path")!)];

			const options: SettingsData = window.require(this.get("path")) as SettingsData;

			this.alter<CAID>("guilds", options?.guilds || {});
			this.alter<boolean>("guildDisabled", options?.guildDisabled || false);
			this.alter("dmDisabled", options?.dmDisabled || false);
		});

		const data = window.require(this.get("path")) as SettingsData;

		this.alter<boolean>("guildDisabled", data.guildDisabled);
		this.alter<boolean>("dmDisabled", data.dmDisabled);
		this.alter<CAID>("guilds", data.guilds);
	}

	private set(): void {
		this.alter<Nullable<string>>("path", this.findConfig());
		this.alter<string>("original", Users.getCurrentUser().getAvatarURL());
		this.load();
	}

    private isPresent(
		property: string, 
		subValue: Nullable<string> = null
	): boolean {
        for (const entry in this.settings) {
            try {
                return Boolean(
                    subValue != null 
                        ? entry?.[property]?.[subValue] 
                        : entry?.[property]
                )
            } catch {}
        }

		return false;
    }
}