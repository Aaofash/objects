
/*function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  }
}
const circle = createCircle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
Circle.call({}, 1, 2, 3)
const another = new Circle(1);*/


function drawCircle(radius, location) {
  return {
    radius,
    location,
    draw() {
      console.log('draw');
    }
  }
}

const circle1 = drawCircle(1,2);
const circle2 = drawCircle(2,2);
console.log(circle1,circle2);

function Circle(radius, location) {
  this.radius = radius;
  this.location = location;
  this.draw = function() {
    console.log('draw');
  }
}


