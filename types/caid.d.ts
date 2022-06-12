type Nullable<T> = T | null | undefined;

declare interface CAID {
    [id: string]: string;
}

declare interface SettingsData {
    dmDisabled: boolean;
    path: string;
    guildDisabled: boolean;
    guilds: CAID;
    temporary: string;
    original: string;
}