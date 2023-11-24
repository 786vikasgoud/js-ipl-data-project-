let array = [];
function runs(matches, deliveries) {
  matches
    .filter(function (elements) {
      return elements.season === "2016";
    })
    .map(function (element) {
      array.push(element.id);
    });
  //console.log(typeof deliveries.match_id);

  return deliveries.reduce(function (accu, element) {
    if (array.includes(element.match_id)) {
      if (accu[element.batting_team] === undefined) {
        accu[element.batting_team] = 0;
      } else {
        accu[element.batting_team] =
          accu[element.batting_team] + Number(element.extra_runs);
      }
    }
    return accu;
  }, {});
}

module.exports = runs;
