const createSVG = require("./createSVG");

describe("SVG Creations", () => {
  it("Checks that the whole SVG code is created", () => {
    const testSVG = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="90" fill="#000000" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="green">TWO</text>
    </svg>`;

    expect(createSVG("Circle", "green", "TWO", "#000000")).toEqual(testSVG);
  });
});
