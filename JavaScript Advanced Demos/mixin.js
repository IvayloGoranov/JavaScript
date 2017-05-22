
class Circle {
    constructor(r) { this.radius = r; }
}

function asCircle() {
    this.area = function() {
        return Math.PI * this.radius * this.radius;
    };
    return this;
}

asCircle.call(Circle.prototype);
let circle = new Circle(5);
console.log(circle.area());

