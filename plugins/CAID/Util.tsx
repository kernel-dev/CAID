import styles from "./main.scss";

export abstract class Util {
    public static validateUrl(imageUrl: Nullable<string>): boolean {
        return (
            imageUrl &&
            typeof imageUrl === "string" &&
            !!imageUrl.match(/\.(jpg|jpeg|png|webp|svg|gif)/gi)?.length
        );
    }

    public static constructImg(imageUrl: Nullable<string>): Nullable<JSX.Element> {
        if (!imageUrl) return;

        if (!this.validateUrl(imageUrl))
            return (
                <p className={styles.InvalidUrl}>Invalid URL!</p>
            );

        return <img src={imageUrl} className={styles.AvatarImg} />;
    }
}