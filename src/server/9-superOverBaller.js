function superOver(deliveries) {
  let result = deliveries.reduce(function (accu, element) {
    if (element.is_super_over === "1") {
      if (accu[element.bowler] === undefined) {
        accu[element.bowler] = {};
        accu[element.bowler]["total_balls"] = 0;
        accu[element.bowler]["total_runs"] = 0;
      }
      if (element.wide_runs === "0" && element.noball_runs === "0") {
        accu[element.bowler]["total_balls"] += 1;
      }

      accu[element.bowler]["total_runs"] += Number(element.total_runs);
    }
    return accu;
  }, {});
  //console.log(result);
  result = Object.entries(result);
  let output = result.reduce(function (accu, elements) {
    let temp = Object.entries(elements[1]);
    let overs = temp[0][1] / 6;
    let echonomy = temp[1][1] / overs;
    accu[elements[0]] = echonomy;
    return accu;
  }, {});
  let outputTwo = Object.entries(output).sort(function (a, b) {
    return a[1] - b[1];
  });

  return outputTwo.slice(0, 1);
}

module.exports = superOver;

// deliveries
// .filter(function (elements) {
//   return elements.is_super_over === "1";
// })
// .reduce(function (accu, element) {
//   if (element.wide_runs === "0" && element.noball_runs === "0") {
//   }
// });
