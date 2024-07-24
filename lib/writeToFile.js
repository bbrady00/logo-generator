const fs = require("fs");

const writeToFile = (data) => {
  fs.writeFile("logo.svg", data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
};

module.exports = writeToFile;
