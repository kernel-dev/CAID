abstract class Util {
    public validateUrl(imageUrl: string): boolean {
        return (
            imageUrl &&
            typeof imageUrl === "string" &&
            !imageUrl.match(/\.(jpg|jpeg|png|webp|svg|gif)/gi)?.length
        );
    }
}