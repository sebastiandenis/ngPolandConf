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

  public getImageUrl():string {
    if(this.imgUrl){
      return 'https:'+this.imgUrl;
    } else{
      return '';
    }
  }
}
