const matches = require("/home/vikas/Desktop/IPLDataProject1/matches.json");
const deliveries = require("/home/vikas/Desktop/IPLDataProject1/deliveries.json");
const fs = require("fs");

const totalMatches = require("/home/vikas/Desktop/IPLDataProject1/src/server/1-matches-per-year.js");
const totamMatchesPlayedPerYear = totalMatches(matches);
console.log(totamMatchesPlayedPerYear);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/1-matches-per-year.json",
  JSON.stringify(totamMatchesPlayedPerYear),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const numberOfMatchesWon = require("/home/vikas/Desktop/IPLDataProject1/src/server/2-matches-won-per-team-per-year.js");
const matchesWonTeamPerYear = numberOfMatchesWon(matches);
console.log(matchesWonTeamPerYear);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/2-matchesWonTeamPerYear.json",
  JSON.stringify(matchesWonTeamPerYear),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const runs = require("/home/vikas/Desktop/IPLDataProject1/src/server/3-runsPerTeam2016.js");
let runsPerTeam2016 = runs(matches, deliveries);
console.log(runsPerTeam2016);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/3-runsPerTeam2016.json",
  JSON.stringify(runsPerTeam2016),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const economicBolwers = require("/home/vikas/Desktop/IPLDataProject1/src/server/4-economicalBowlers.js");
let topTenEcomomicalBowlers = economicBolwers(matches, deliveries);
console.log(topTenEcomomicalBowlers.slice(0, 10));
fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/4-economicalBowlers.json",
  JSON.stringify(topTenEcomomicalBowlers),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const TeamTossMatch = require("/home/vikas/Desktop/IPLDataProject1/src/server/5-TeamTossMatchWon.js");
let TeamTossMatchWon = TeamTossMatch(matches);
console.log(TeamTossMatchWon);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/5-teamTossMatchWon.json",
  JSON.stringify(TeamTossMatchWon),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const highestPlayerOfTheMatch = require("/home/vikas/Desktop/IPLDataProject1/src/server/6-highestPlayerOfTheMatch.js");
let wonHighestPlayerOfTheMatch = highestPlayerOfTheMatch(matches);
console.log(wonHighestPlayerOfTheMatch);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/6-highestPlayerOfTheMatches.json",
  JSON.stringify(wonHighestPlayerOfTheMatch),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const strikeRate = require("/home/vikas/Desktop/IPLDataProject1/src/server/7-strikeRateOfBatsman.js");
let strikeRateOfBatsman = strikeRate(matches, deliveries);
console.log(strikeRateOfBatsman);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/7-strikeRateOfPerson.json",
  JSON.stringify(strikeRateOfBatsman),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const playerDismissed = require("/home/vikas/Desktop/IPLDataProject1/src/server/8-playerDismissed.js");
let playerDismissedData = playerDismissed(deliveries);
console.log(playerDismissedData);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/8-playerDismissed.json",
  JSON.stringify(playerDismissedData),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);

const superOver = require("/home/vikas/Desktop/IPLDataProject1/src/server/9-superOverBaller.js");
let result = superOver(deliveries);
console.log(result);

fs.writeFileSync(
  "/home/vikas/Desktop/IPLDataProject1/src/public/output/9-superOverBaller.json",
  JSON.stringify(result),
  "utf-8",
  (obj) => {
    console.log(obj);
  }
);
