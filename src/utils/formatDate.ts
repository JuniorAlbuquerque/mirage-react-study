import { DateTime } from "luxon";

const dateType = {
  dateAndTime: "f",
  date: "D",
  hourAndMinutes: "T",
};

type FormatType = "dateAndTime" | "date" | "hourAndMinutes";

export const dateToView = (
  date: string,
  type: {
    format: FormatType;
  }
) => {
  const dateToISO = new Date(date).toISOString();

  return DateTime.fromISO(dateToISO).toFormat(dateType[type.format]);
};
