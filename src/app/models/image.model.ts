export interface IImage {
  imgUrl: string;
  imgTitle: string;
  imgDesc?: string;
}

export class Image implements IImage {
  constructor(
    public imgUrl: string,
    public imgTitle: string,
    public imgDesc?: string
  ) {}

  getImageUrl(): string {
    if (this.imgUrl) {
      return "http:" + this.imgUrl;
    } else {
      return "";
    }
  }
}
