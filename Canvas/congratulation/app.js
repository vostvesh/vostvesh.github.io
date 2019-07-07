const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

canvas.style.background = 'magenta';
// c.fillRect(0, 0, innerWidth, innerHeight);

class Stripe {
  constructor(x, width) {
    this.x = x;
    this.width = width;
  }

  draw() {
    const gradient = c.createLinearGradient(this.x, 0, this.x + this.width, 0);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(1, 'rgba(255, 0, 0)');

    c.fillStyle = gradient;

    c.beginPath();
    c.fillRect(this.x, 0, this.width, innerHeight);
    c.closePath();
  }

  update(direction) {
    if (this.x <= -this.width) return false;
    if (this.x >= innerWidth * 2) return false;
    if (direction === 'l') {
      this.x -= 3;
    } else {
      this.x += 3;
    }
    this.draw();
    return true;
  }
}

const stripes = [];
const stripesR = [];
let x = 0;
const stripeW = innerWidth * 5 / 100;
const countOfStripes = Math.ceil(innerWidth / stripeW) / 2;

for (let i = 0; i < countOfStripes; i++) {
  stripes.push(new Stripe(x, stripeW));
  x += stripeW;
}

for (let i = 0; i < countOfStripes; i++) {
  stripesR.push(new Stripe(x, stripeW));
  x += stripeW;
}

const scene1 = () => {
  c.clearRect(0, 0, innerWidth, innerHeight);

  const stl = stripes.map(stripe => stripe.update('l'));

  const str = stripesR.map(stripe => stripe.update());

  return stl.some(x => x) && str.some(x => x);
};
let v = 0;
const interval = setInterval(() => {
  const res = scene1();
  c.beginPath();
  c.fillRect(++v, ++v, 300, 300);
  if (!res) {
    clearInterval(interval);
    console.log('finish scene 1')
  }
}, 12);

// function animate() {
//   requestAnimationFrame(animate);
//   scene1();
// }

// animate();