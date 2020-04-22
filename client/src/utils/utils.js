export const getZeroFirstFormat = (value) => {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
};

export const numberWithSeparator = (number, separator) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
