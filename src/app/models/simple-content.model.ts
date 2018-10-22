export interface ISimpleContentModel {
  myId: string;
  title: string;
  text: string;
}

export class SimpleContent implements ISimpleContentModel {
  constructor(public myId: string, public title: string, public text: string) {}
}
