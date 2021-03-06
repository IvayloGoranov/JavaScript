
// since EcmaScript6 ...
class RectangleClass {
    constructor(width, height, color) {
        this._width = width;
        this._height = height;
        this._color = color;
    }

    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }

    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    calcArea() {
        return this._width * this._height;
    }
}

class SquareClass extends RectangleClass {
    constructor(width, height, color) {
        super(width, height, color);
    }
}

let r = new RectangleClass();
r.width = 5;
r.height = 3;
console.log(r.area);
console.log(r.calcArea());

let sq = new SquareClass(5, 5);
console.log(sq.area);
console.log(sq);

//Old way...
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

let rect = new Rectangle(3, 5);
console.log(rect.area());

let rect1 = new Rectangle();
let square = Object.create(rect1); //prototype chaining
square.width = 3;
square.height = 3;
console.log(square.area());
console.log(square);


