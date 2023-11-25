function playerDismissed(deliveries) {
  let result = deliveries.reduce(function (accu, element) {
    if (element.player_dismissed !== "") {
      if (accu[element.player_dismissed] === undefined) {
        accu[element.player_dismissed] = {};
      }
      if (
        element.dismissal_kind !== "retired hurt" &&
        element.dismissal_kind !== "run out"
      ) {
        if (accu[element.player_dismissed][element.bowler] === undefined) {
          accu[element.player_dismissed][element.bowler] = 1;
        } else {
          accu[element.player_dismissed][element.bowler] += 1;
        }
      }
      if (element.dismissal_kind === "run out") {
        if (accu[element.player_dismissed][element.fielder] === undefined) {
          accu[element.player_dismissed][element.fielder] = 1;
        } else {
          accu[element.player_dismissed][element.fielder] += 1;
        }
      }
    }
    return accu;
  }, {});
  let output = Object.entries(result).reduce(function (accu, element) {
    let arr = Object.entries(element[1]).sort(function (a, b) {
      return b[1] - a[1];
    });
    //return arr;
    accu[element[0]] = arr[0];
    return accu;
  }, {});
  let sortedOutput = Object.entries(output);
  sortedOutput = sortedOutput.sort(function (a, b) {
    return b[1][1] - a[1][1];
  });
  //console.log(sortedOutput[0]);
  return sortedOutput[0];
}
module.exports = playerDismissed;
