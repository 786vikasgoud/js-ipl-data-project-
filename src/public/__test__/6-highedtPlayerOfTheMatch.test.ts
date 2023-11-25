const highestPlayerOfTheMatch = require("/home/vikas/Desktop/IPLDataProject1/src/server/6-highestPlayerOfTheMatch.js");
describe("highestPlayerOfTheMatch", function () {
  test("excuating empty objects", function () {
    const input = [];
    const result = highestPlayerOfTheMatch(input);
    expect(result).toEqual({});
  });
  test("excuating for null objects passed", function () {
    const input = null;
    const result = highestPlayerOfTheMatch(input);
    expect(result).toEqual(null);
  });
  test("excuating the values", function () {
    const input = [
      { season: "2022", player_of_match: "kohli" },
      { season: "2022", player_of_match: "dhoni" },
      { season: "2019", player_of_match: "dhoni" },
      { season: "2022", player_of_match: "kohli" },
      { season: "2019", player_of_match: "dhoni" },
    ];
    const output = highestPlayerOfTheMatch(input);
    expect(output).toEqual({
      "2019": ["dhoni", 2],
      "2022": ["kohli", 2],
    });
  });
});
