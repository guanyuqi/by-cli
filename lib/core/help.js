const program = require("commander");

const helpOptions = () => {
  program.option("-b --by", "一个脚手架");
  program.option(
    "-d --dest <dest>",
    "a destination floder,例如 -d /src/components"
  );
  program.option("-f --framework", "your framework 你的框架");

  program.on("--help", function () {
    console.log("");
    console.log("Other:");
    console.log("other options~");
  });
};

module.exports = helpOptions;
