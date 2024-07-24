const Shapes = require("./shapes");
const Text = require("./text");

const createSVG = (shape, textColour, text, bgColour) => {
  //Sets text and text colour
  const selectedText = new Text(text);
  selectedText.setColour(textColour);

  let selectedShape;
  //get the selected shape from shapes.js
  switch (shape) {
    case "Circle":
      selectedShape = new Shapes.Circle();
      selectedText.setFontSize(60);
      break;
    case "Triangle":
      selectedShape = new Shapes.Triangle();
      selectedText.setFontSize(40);
      break;
    case "Square":
      selectedShape = new Shapes.Square();
      selectedText.setFontSize(60);
      break;
    default:
      break;
  }

  //Set the shape and background colour
  const svgShape = selectedShape.render(bgColour);

  //Renders the text
  const svgText = selectedText.render();

  //Creates the total SVG text
  const svg = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        ${svgShape}
        ${svgText}
    </svg>`;

  return svg;
};

module.exports = createSVG;
