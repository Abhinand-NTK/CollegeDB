const fs = require("fs");
const csv = require('csv');

const readColleges = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('db/database.csv', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      console.log("[cAPi] : File read!");

      csv.parse(data, function (err, data) {
        if (err) {
          reject(err);
          return;
        }

        const colleges = data;

        console.log("[cAPi] : CSV Loaded!");
        resolve(colleges);
      });
    });
  });
};


readColleges()
  .then((colleges) => {
    console.log('got the colleges');
  })
  .catch((error) => {
    console.error("Error:", error);
  });


module.exports = readColleges;
