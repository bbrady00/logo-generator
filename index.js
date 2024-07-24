//Import dependencies
const inquirer = require("inquirer");
const createSVG = require("./lib/createSVG.js");
const writeToFile = require("./lib/writeToFile.js");

//Questions to ask
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter your logo text (max three characters):",
    validate(value) {
      const pass = value.length;
      if (pass <= 3) {
        return true;
      }
      return "Please enter a maximum of 3 characters";
    },
  },
  {
    type: "input",
    name: "textColour",
    message:
      "Enter the colour name or hexidecimal number (including a #) for the text: ",
  },
  {
    type: "list",
    name: "shape",
    message: "Select the shape for the logo: ",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "bgColour",
    message:
      "Enter the colour name or hexidecimal number (including a #) for the shape background: ",
  },
];

//Inquirer function to ask the question prompts
inquirer
  .prompt(questions)
  .then((answers) => {
    return createSVG(
      answers.shape,
      answers.textColour,
      answers.text,
      answers.bgColour
    );
  })
  .then((svg) => {
    writeToFile(svg);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
