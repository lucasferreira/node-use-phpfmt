const { fmtPath, hasInstalled } = require("../index");
if (hasInstalled()) {
  const cmd = `php ${fmtPath} -o=./test/beauty.php ./test/ugly.php`;
  console.log(`Please run the command bellow in your terminal to test phpfmt:`);
  console.log(cmd);
} else {
  console.log(`phpfmt (fmt.stub.php) not found, please run first 'phpfmt-install' cmd`);
}
