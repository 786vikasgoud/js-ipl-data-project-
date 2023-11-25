const matchesWonPerYear = require("/home/vikas/Desktop/IPLDataProject1/src/server/2-matches-won-per-team-per-year.js");
describe("matchesWonPerYear", function () {
  test("excuating empty objects", function () {
    const input = [];
    const result = matchesWonPerYear(input);
    expect(result).toEqual({});
  });
  test("excuating for null objects passed", function () {
    const input = null;
    const result = matchesWonPerYear(input);
    expect(result).toEqual(null);
  });
  test("excuating the values", function () {
    const input = [
      { season: 2010, winner: "Kolkata Knight Riders" },
      { season: 2012, winner: "Royal Challengers Bangalore" },
      { season: 2012, winner: "Royal Challengers Bangalore" },
      { season: 2010, winner: "Mumbai Indians" },
      { season: 2010, winner: "Mumbai Indians" },
      { season: 2012, winner: "Chennai Super Kings" },
      { season: 2012, winner: "Chennai Super Kings" },
      { season: 2010, winner: "Delhi Daredevils" },
      { season: 2010, winner: "Delhi Daredevils" },
      { season: 2010, winner: "Delhi Daredevils" },
      { season: 2012, winner: "Deccan Chargers" },
    ];
    const output = matchesWonPerYear(input);
    expect(output).toEqual({
      2010: {
        "Kolkata Knight Riders": 1,
        "Mumbai Indians": 2,
        "Delhi Daredevils": 3,
      },
      2012: {
        "Deccan Chargers": 1,
        "Royal Challengers Bangalore": 2,
        "Chennai Super Kings": 2,
      },
    });
  });
});
