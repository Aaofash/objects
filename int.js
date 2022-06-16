
/*function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  }
}
const circle = createCircle(1);*/

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
Circle.call({}, 1, 2, 3)
const another = new Circle(1);
