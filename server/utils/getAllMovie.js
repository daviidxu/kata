const fs = require("fs");
const path = require("path");

function tsvJSON(tsv) {
  const lines = tsv.split("\n");
  const headers = lines.slice(0, 1)[0].split("\t");
  return lines.slice(1, lines.length).map((line) => {
    const data = line.split("\t");
    return headers.reduce((obj, nextKey, index) => {
      obj[nextKey] = data[index];
      return obj;
    }, {});
  });
}

module.exports = {
  getAllMovie: function () {
    console.log("bouuuh ");
    const content = fs.readFileSync(
      path.join(__dirname, "./datas.tsv"),
      "utf8"
    );
    const arrayMovie = tsvJSON(content);
    return arrayMovie;
  },
};
