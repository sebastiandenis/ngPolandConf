import {IConference} from "../models/conference.model";
import { ITheme } from '../models/theme.model';
export const environment = {
  contentful: {
    spaceId: "87a5voy5in4s",
    token: "b21c9654f0c3a9b02d30e387e6d99c010c5f83e0f83e0b3cb2431dfa5d3b2914"
  }
};

export const conferenceYears = ["2018", "2019"];
export const conferenceThemes = ["freddie-m", "terminator"];

const theme2018: ITheme = {
  cssClassName: conferenceThemes[1]
};
const theme2019: ITheme = {
  cssClassName: conferenceThemes[1]
};
export const conferences: Array<IConference> = [
  {
    confId: conferenceYears[0],
    confName: "ngPolandConf 2018",
    confYear: 2018,
    confTheme: theme2018
  },
  {
    confId: conferenceYears[1],
    confName: "ngPolandConf 2019",
    confYear: 2019,
    confTheme: theme2019
  }
];
