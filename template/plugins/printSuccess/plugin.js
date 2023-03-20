const { green, blue, yellow, red } = require("kleur");

module.exports = {
  async apply(value, previousValues) {
    return new Promise((resolve) => {
      console.log("\n");
      console.log("The HappyDuck Template initialized with success ! 🚀\n");

      if (previousValues.typescript) {
        console.log(blue("  THE TYPESCRIPT VERSION 📘"));
      } else {
        console.log(yellow("  THE JAVASCRIPT VERSION 📒"));
      }
      console.log("\n");

      if (!previousValues.typescript) {
        console.log("\n");
        console.log(
          red(
            '🚨 You choose the javascript version, don\'t forget to run "yarn lint --fix" after the installation 🚨'
          )
        );
        console.log("\n");
      }

      resolve();
    });
  },
};
