export abstract class Launcher {

    static registeredLaunchers: Array<Launcher> = [];

    supportedPlatforms: Array<string>;

    protected constructor(supportedPlatforms: Array<string>) {
        this.supportedPlatforms = supportedPlatforms;

        Launcher.registeredLaunchers.push(this);
    }
}
