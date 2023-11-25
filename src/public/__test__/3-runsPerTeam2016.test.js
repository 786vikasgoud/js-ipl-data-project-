const runsPerTeam2016 = require("/home/vikas/Desktop/IPLDataProject1/src/server/3-runsPerTeam2016.js");
describe("runsPerTeam2016", function () {
  test("excuating empty objects", function () {
    const input = null;
    const result = runsPerTeam2016(input, input);
    expect(result).toEqual(null, null);
    expect(result).toEqual(null);
  });
  test("excuating for null objects passed", function () {
    const input1 = [];
    const input2 = [];
    const result = runsPerTeam2016(input1, input2);
    expect(result).toEqual({});
  });
  test("excuating the values", function () {
    const input1 = [
      { season: "2016", id: 1 },
      { season: "2017", id: 3 },
      { season: "2016", id: 2 },
      { season: "2016", id: 4 },
    ];
    const input2 = [
      { match_id: 1, extra_runs: 8, batting_team: "Mumbai Indians" },
      { match_id: 2, extra_runs: 22, batting_team: "Rising Pune Supergiants" },
      { match_id: 3, extra_runs: 13, batting_team: "Rising Pune Supergiants" },
      { match_id: 4, extra_runs: 20, batting_team: "Delhi Daredevils" },
      { match_id: 5, extra_runs: 23, batting_team: "Delhi Daredevils" },
      { match_id: 6, extra_runs: 12, batting_team: "Pune Supergiants" },
      { match_id: 7, extra_runs: 13, batting_team: "rising Pun" },
    ];
    const output = {
      "Mumbai Indians": 8,
      "Rising Pune Supergiants": 22,
      "Delhi Daredevils": 20,
      "Delhi Daredevils": 0,
      "Mumbai Indians": 0,
      "Rising Pune Supergiants": 0,
    };
    const result = runsPerTeam2016(input1, input2);
    expect(result).toEqual(output);
  });
});
