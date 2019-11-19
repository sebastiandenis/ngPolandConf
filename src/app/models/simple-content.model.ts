export interface ISimpleContentModel {
  myId: string;
  title: string;
  text: string;
  confId: string;
}

export class SimpleContent implements ISimpleContentModel {
  constructor(public myId: string, public title: string, public text: string, public confId: string) {}
}
