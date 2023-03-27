const path = require("path");
const fs = require("fs");

const fmtPath = path.join(__dirname, "fmt.stub.php");

const phpfmt = {
  pharPath: fmtPath,
  fmtPath,
};

phpfmt.hasInstalled = function () {
  return fs.existsSync(phpfmt.fmtPath);
};

phpfmt.default = phpfmt;
module.exports = exports = phpfmt;
