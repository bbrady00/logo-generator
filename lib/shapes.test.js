const shapes = require("./shapes");

describe("Shape Tests", () => {
  describe("Checking Circle", () => {
    it("this checks that the correct svg text for circle is returned", () => {
      const circle = new shapes.Circle();
      expect(circle.render("blue")).toEqual(
        '<circle cx="150" cy="100" r="90" fill="blue" />'
      );
    });
  });

  describe("Checking Triangle", () => {
    it("this checks that the correct svg text for triangle is returned", () => {
      const triangle = new shapes.Triangle();
      expect(triangle.render("red")).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
      );
    });
  });

  describe("Checking Square", () => {
    it("this checks that the correct svg text for square is returned", () => {
      const square = new shapes.Square();
      expect(square.render("green")).toEqual(
        '<rect x="50" width="200" height="200" fill="green" />'
      );
    });
  });
});
