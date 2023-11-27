const csvFilePath = "/home/vikas/Desktop/IPLDataProject1/src/data/matches.csv";
const csv = require("csvtojson");
const fs = require("fs");
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync(
      "/home/vikas/Desktop/IPLDataProject1/matches.json",
      JSON.stringify(jsonObj),
      "utf-8",
      (err) => {
        console.log(err);
      }
    );
  });

const csvFilePath1 =
  "/home/vikas/Desktop/IPLDataProject1/src/data/deliveries.csv";
csv()
  .fromFile(csvFilePath1)
  .then((jsonObj) => {
    fs.writeFileSync(
      "/home/vikas/Desktop/IPLDataProject1/deliveries.json",
      JSON.stringify(jsonObj),
      "utf-8",
      (err) => {
        console.log(err);
      }
    );
  });
