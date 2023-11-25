function numberOfMatchesWon(matches) {
  if (matches === null) return null;
  let result = matches.reduce(function (accu, element) {
    if (accu[element.season] === undefined) {
      accu[element.season] = {};
    }
    if (accu[element.season][element.winner] === undefined) {
      accu[element.season][element.winner] = 1;
    } else {
      accu[element.season][element.winner] += 1;
    }
    return accu;
  }, {});
  return result;
}
module.exports = numberOfMatchesWon;
