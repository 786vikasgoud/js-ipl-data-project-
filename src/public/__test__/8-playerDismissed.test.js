const playerDismissed = require("/home/vikas/Desktop/IPLDataProject1/src/server/8-playerDismissed.js");
describe("playerDismissed", function () {
  test("excuating the values", function () {
    const input = [
      {
        player_dismissed: "warner",
        dismissal_kind: "run out",
        fielder: "kohli",
        bowler: "shami",
      },
      {
        player_dismissed: "warner",
        dismissal_kind: "run out",
        fielder: "kohli",
        bowler: "shami",
      },
      {
        player_dismissed: "miller",
        dismissal_kind: "lbw",
        fielder: "",
        bowler: "bumrah",
      },
      {
        player_dismissed: "kane",
        dismissal_kind: "catch",
        fielder: "rohit",
        bowler: "jadeja",
      },
      {
        player_dismissed: "",
        dismissal_kind: "",
        fielder: "",
        bowler: "jadeja",
      },
      {
        player_dismissed: "warner",
        dismissal_kind: "wicket",
        fielder: "",
        bowler: "kohli",
      },
      {
        player_dismissed: "warner",
        dismissal_kind: "wicket",
        fielder: "",
        bowler: "bhuvi",
      },
    ];
    const output = playerDismissed(input);
    expect(output).toEqual(["warner", ["kohli", 3]]);
  });
});
