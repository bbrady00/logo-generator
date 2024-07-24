//Parent shape class
class Shape {
  constructor() {}
  colour(colour) {
    return (this.colour = colour);
  }
}

//Creates the circle SVG text
class Circle extends Shape {
  constructor() {
    super();
  }

  render(colour) {
    const circle = `<circle cx="150" cy="100" r="90" fill="${super.colour(
      colour
    )}" />`;
    return circle;
  }
}
//Creates the Triangle SVG text
class Triangle extends Shape {
  constructor() {
    super();
  }

  render(colour) {
    const triangle = `<polygon points="150, 18 244, 182 56, 182" fill="${super.colour(
      colour
    )}" />`;
    return triangle;
  }
}
//Creates the Square SVG text
class Square extends Shape {
  constructor() {
    super();
  }

  render(colour) {
    const square = `<rect x="50" width="200" height="200" fill="${super.colour(
      colour
    )}" />`;
    return square;
  }
}

module.exports = { Circle, Square, Triangle };
