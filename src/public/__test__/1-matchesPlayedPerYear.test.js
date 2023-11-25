const matchesPlayedPerYear = require("/home/vikas/Desktop/IPLDataProject1/src/server/1-matches-per-year.js");
describe("matchesPlayedPerYear", function () {
  test("excuating empty objects", function () {
    const input = [];
    const result = matchesPlayedPerYear(input);
    expect(result).toEqual({});
  });
  test("excuating for null objects passed", function () {
    const input = null;
    const result = matchesPlayedPerYear(input);
    expect(result).toEqual(null);
  });
  test("excuating the values", function () {
    const input = [
      { season: 1964, team: "mi" },
      { season: 2000, team: "srh" },
      { season: 2000, team: "kkr" },
      { season: 2006, team: "rcb" },
    ];
    const output = matchesPlayedPerYear(input);
    expect(output).toEqual({ 1964: 1, 2000: 2, 2006: 1 });
  });
});
