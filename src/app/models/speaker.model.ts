import { Image } from "./image.model";

export interface ISpeaker {
  name: string;
  role?: string;
  bio?: string;
  photo?: Image;
  email?: string;
  urlGithub?: string;
  urlLinkedIn?: string;
  urlTwitter?: string;
  urlWww?: string;
}

export class Speaker implements ISpeaker {
  photo: Image;

  constructor(
    public name: string,
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
