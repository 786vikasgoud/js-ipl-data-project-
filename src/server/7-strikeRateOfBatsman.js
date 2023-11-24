function strikeRate(matches, deliveries) {
  let years = matches.reduce(function (accu, element) {
    accu[element.id] = element.season;
    return accu;
  }, {});
  //return years;
  let result = deliveries.reduce(function (accu, element) {
    if (accu[element.batsman] === undefined) {
      accu[element.batsman] = {};
    }
    let season = years[element.match_id];
    if (accu[element.batsman][season] === undefined) {
      accu[element.batsman][season] = {};
      accu[element.batsman][season]["total_balls"] = 0;
      accu[element.batsman][season]["total_runs"] = 0;
    }
    if (element.wide_runs === "0" && element.noball_runs === "0") {
      accu[element.batsman][season]["total_balls"] += 1;
    }
    accu[element.batsman][season]["total_runs"] += Number(element.total_runs);
    return accu;
  }, {});
  // result = Object.entries(result);
  // result[1].reduce(function (accu, row) {
  //   Object.entries(row[1]).reduce(function (acuu, row1) {
  //     row1;
  //   });
  // });
  //return result;
  console.log(result);
  let output = Object.entries(result).reduce(function (op, row) {
    let temp_obj = {};
    let keys = Object.keys(row[1]);
    for (let i = 0; i < keys.length; i++) {
      let temp =
        (row[1][keys[i]].total_runs / row[1][keys[i]].total_balls) * 100;
      temp_obj[keys[i]] = temp;
      op;
    }
    op[row[0]] = temp_obj;
    return op;
  }, {});
  return output;
  //Object.entries(result);
}

module.exports = strikeRate;
