export const getZeroFirstFormat = (value) => {
  return value < 10 ? `0${value}` : value;
};

export const numberWithSeparator = (number, separator) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

export const convertTimestampToDate = (timestamp, separator) => {
  const date = new Date(timestamp);

  const day = getZeroFirstFormat(date.getDate());
  const month = getZeroFirstFormat(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}${separator}${month}${separator}${year}`;
};
