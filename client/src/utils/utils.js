// @flow

export const getZeroFirstFormat = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};

export const numberWithSeparator = (
  number: number,
  separator?: string = ","
): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const convertTimestampToDate = (
  timestamp: number,
  separator?: string = "."
): string => {
  const date = new Date(timestamp);

  const day = getZeroFirstFormat(date.getDate());
  const month = getZeroFirstFormat(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}${separator}${month}${separator}${year}`;
};
