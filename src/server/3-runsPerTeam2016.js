let array = [];
function runs(matches, deliveries) {
  if (matches === null || deliveries === null) return null;
  matches
    .filter(function (elements) {
      return elements.season === "2016";
    })
    .map(function (element) {
      array.push(element.id);
    });

  let output = deliveries.reduce(function (accu, element) {
    if (array.includes(element.match_id)) {
      if (accu[element.batting_team] === undefined) {
        accu[element.batting_team] = Number(element.extra_runs);
      } else {
        accu[element.batting_team] += Number(element.extra_runs);
      }
    }
    return accu;
  }, {});
  return output;
}

module.exports = runs;
