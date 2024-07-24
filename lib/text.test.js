const text = require("./text");

describe("Text Tests", () => {
  describe("Checking text colour", () => {
    it("this checks that the correct text colour is created", () => {
      const txt = new text("PEA");
      txt.setColour("#f4f4f4");
      txt.setFontSize(80);
      expect(txt.render()).toEqual(
        '<text x="150" y="120" font-size="80" text-anchor="middle" fill="#f4f4f4">PEA</text>'
      );
    });
  });

  describe("Checking text", () => {
    it("this checks that the correct text is returned", () => {
      const txt = new text("TEA");
      txt.setColour("red");
      txt.setFontSize(60);
      expect(txt.render()).toEqual(
        '<text x="150" y="120" font-size="60" text-anchor="middle" fill="red">TEA</text>'
      );
    });
  });

  describe("Checking font size", () => {
    it("this checks that the correct font size is created", () => {
      const txt = new text("FLY");
      txt.setColour("red");
      txt.setFontSize(50);
      expect(txt.render()).toEqual(
        '<text x="150" y="120" font-size="50" text-anchor="middle" fill="red">FLY</text>'
      );
    });
  });
});
