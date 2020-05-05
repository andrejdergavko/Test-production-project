import {
  getZeroFirstFormat,
  numberWithSeparator,
  convertTimestampToDate,
} from "../utils";

describe("Utils:", () => {
  describe("GetZeroFirstFormat function:", () => {
    it("Should get correct vormat", () => {
      expect(getZeroFirstFormat(2)).toBe("02");
      expect(getZeroFirstFormat("2")).toBe("02");
    });
  });

  describe("NumberWithSeparator function:", () => {
    it("Should get correct value", () => {
      expect(numberWithSeparator(1000, ",")).toBe("1,000");
      expect(numberWithSeparator(100)).toBe("100");
    });
  });

  describe("ConvertTimestampToDate function:", () => {
    it("Should get correct timestamp", () => {
      expect(convertTimestampToDate(1588610661397, "/")).toBe("04/05/2020");
      expect(convertTimestampToDate(1588610661397)).toBe("04.05.2020");
    });
  });
});
