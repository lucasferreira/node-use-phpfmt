const path = require("path");
const fs = require("fs");

const destPath = path.join(__dirname, "/fmt.stub.php");
if (fs.existsSync(destPath)) {
  if (fs.unlinkSync(destPath)) {
    console.log("phpfmt (fmt.stub.php) uninstalled successfully");
  }
}
