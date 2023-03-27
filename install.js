const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

const url = "https://raw.githubusercontent.com/driade/phpfmt8/master/fmt.stub.php";
console.log("Fetching fmt.stub.php from: " + url);

const destPath = path.join(__dirname, "/fmt.stub.php");

fetch(url)
  .then(function (res) {
    var dest = fs.createWriteStream(destPath, {
      autoClose: true,
    });
    res.body.pipe(dest).on("finish", function () {
      console.log("phpfmt (fmt.stub.php)  successfully installed!\n");
      process.exit(0);
    });
  })
  .catch(function (err) {
    console.error("Error installing phpfmt (fmt.stub.php): " + err.toString());
    process.exit(1);
  });
