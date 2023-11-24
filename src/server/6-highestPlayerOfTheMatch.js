function highestPlayerOfTheMatch(matches) {
  let arr = matches.reduce(function (accu, element) {
    if (accu[element.season] === undefined) {
      accu[element.season] = {};
    }

    if (accu[element.season][element.player_of_match] === undefined) {
      accu[element.season][element.player_of_match] = 1;
    } else {
      accu[element.season][element.player_of_match] += 1;
    }
    return accu;
  }, {});

  let result = Object.entries(arr).reduce(function (accu, element) {
    let arr = Object.entries(element[1]).sort(function (a, b) {
      return b[1] - a[1];
    });
    accu[element[0]] = arr[0];
    return accu;
  }, {});
  return result;
}
module.exports = highestPlayerOfTheMatch;

// let finalValues = [];
// let objectOfResult = {};
// Object.entries(arr).map(function (element) {
//   Object.entries(element[1]).map(function (ele) {
//     finalValues.push(ele[1]);
//   });
//   let max = Math.max(...finalValues);
//   if (objectOfResult[element[0]] === undefined) {
//     objectOfResult[element[0]] = max;
//   }
// });
// return objectOfResult;
