import { IImage, Image } from "./image.model";

export interface ISpeaker {
    name: string;
    confIds: Array<string>;
    role?: string;
    bio?: string;
    photo?: IImage;
    email?: string;
    urlGithub?: string;
    urlLinkedIn?: string;
    urlTwitter?: string;
    urlWww?: string;
}

export class Speaker implements ISpeaker {
    photo: IImage;

    constructor(
        public name: string,
        public confIds: Array<string>,
        public role: string,
        public bio: string,
        imgUrl: string,
        imgTitle: string,
        imgDesc: string,
        public email: string,
        public urlGithub: string,
        public urlLinkedIn: string,
        public urlTwitter: string,
        public urlWww: string
    ) {
        this.photo = new Image(imgUrl, imgTitle, imgDesc);
    }
}
