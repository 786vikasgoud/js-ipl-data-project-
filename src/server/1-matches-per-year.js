function totalMatches(matches) {
  if (matches === null) return null;
  const totaoMt = matches.reduce(function (object, elements) {
    if (object[elements.season]) {
      object[elements.season] = ++object[elements.season];
    } else {
      object[elements.season] = 1;
    }
    return object;
  }, {});
  return totaoMt;
}

module.exports = totalMatches;
