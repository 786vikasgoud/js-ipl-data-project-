let array = [];
function economicBolwers(matches, deliveries) {
  array = matches.reduce(function (accu, element) {
    if (element.season === "2015") {
      accu.push(element.id);
    }
    return accu;
  }, []);
  let arr = deliveries.reduce(function (accu, element) {
    if (array.includes(element.match_id)) {
      if (accu[element.bowler] === undefined) {
        accu[element.bowler] = {};
      } else if (element.wide_runs === "0" && element.noball_runs === "0") {
        if (accu[element.bowler]["total_balls"] !== undefined) {
          accu[element.bowler]["total_balls"] += 1;
        } else {
          accu[element.bowler]["total_balls"] = 0;
        }
      }

      if (accu[element.bowler]["total_runs"] === undefined) {
        accu[element.bowler]["total_runs"] = 0;
      } else {
        accu[element.bowler]["total_runs"] += Number(element.total_runs);
      }
    }
    return accu;
  }, {});
  arr = Object.entries(arr);
  let output2 = arr.reduce(function (accu, element) {
    let temp = Object.entries(element[1]);
    let overs = temp[1][1] / 6;
    let echo = temp[0][1] / overs;
    //console.log(element[0]);
    accu[element[0]] = echo;
    return accu;
  }, {});
  //return arr;
  let output = Object.entries(output2).sort(function (a, b) {
    return a[1] - b[1];
  });
  return output.slice(0, 10);
}

module.exports = economicBolwers;
