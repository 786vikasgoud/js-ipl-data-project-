function TeamTossMatch(matches) {
  return matches.reduce(function (accu, element) {
    if (element.toss_winner === element.winner) {
      if (accu[element.winner] === undefined) {
        accu[element.winner] = {};
        if (accu[element.winner]["win"] === undefined) {
          accu[element.winner]["win"] = 1;
        }
      } else {
        accu[element.winner]["win"] = ++accu[element.winner]["win"];
      }
    }
    return accu;
  }, {});
}

module.exports = TeamTossMatch;
