import {Launcher} from "../launcher/Launcher";

export class Game {

    title: string;
    year: number;
    coverArt: string;
    platform: string;

    launcher: Launcher;

    constructor(title: string, year: number, coverArt: string, platform: string) {
        this.title = title;
        this.year = year;
        this.coverArt = coverArt;
        this.platform = platform;

        const supportedLauncher = Launcher.registeredLaunchers.find(launcher => launcher.supportedPlatforms.includes(this.platform));
        if(!supportedLauncher) {
            throw new Error("Platform not supported by any registered launchers");
        }
        this.launcher = supportedLauncher;
    }


}
