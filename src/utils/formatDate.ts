import { DateTime } from "luxon";

const dateType = {
  date: "D",
  dateTime: "f",
  dateTimeSeconds: "F",
  hourTime: "T",
  houtTimeSeconds: "TT",
};

type FormatType =
  | "date"
  | "dateTime"
  | "dateTimeSeconds"
  | "hourTime"
  | "houtTimeSeconds";

export const dateToView = (
  date: string,
  type: {
    format: FormatType;
  }
) => {
  const dateToISO = new Date(date).toISOString();

  return DateTime.fromISO(dateToISO).toFormat(dateType[type.format]);
};
