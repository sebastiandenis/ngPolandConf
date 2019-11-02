export interface IVersion {
    version: string;
}

export class Version {
    constructor(public version: string) {}

    init(version: IVersion) {
        this.version = version.version;
    }
}
