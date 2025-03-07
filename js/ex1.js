class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return this.side ** 2;
  }
  diagonal() {
    return Math.sqrt(2 * this.area());
  }
  describe() {
    return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()} and diagonal of ${this.diagonal()}`;
  }
}
const square = new Square(5);
console.log(square.describe());