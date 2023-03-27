# use-phpfmt

A simpler phpfmt (fmt.stub.php) installer for Node.js work.

## Original project

This package is heavilly inspired in a "dead" package from user https://github.com/kokororin

## phpfmt source

This package are now using the source of PHPFMT from this active project:

https://github.com/driade/phpfmt8

The project above has the main goal to create some _Sublime Text 4_ extension to auto format .php files so their "fmt.stub.php" in IMHO it is the most updated (and active) version of phpfmt.phar.

## Install and Usage

First of all:

`npm install --save use-phpfmt`

or

`yarn add use-phpfmt`

This package will download the lastest version of PHPFMT script in the moment of his installation, so after the install you could use our `fmtPath` to get the full path where the `fmt.stub.php` is stored and use it.

### How to get the fmt.stub.php full path to exec with your php binary

```js
const { fmtPath, hasInstalled } = require("use-phpfmt");
if (hasInstalled()) {
  const cmd = `php ${fmtPath} -o=./test/beauty.php ./test/ugly.php`;
  console.log(`Please run the command bellow in your terminal to test phpfmt:`);
  console.log(cmd);
} else {
  console.log(`phpfmt (fmt.stub.php) not found, please run first 'phpfmt-install' cmd`);
}
```
