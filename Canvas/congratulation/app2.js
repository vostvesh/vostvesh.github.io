const canvas = document.createElement("canvas");
document.body.append(canvas);
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

canvas.style.background = "magenta";
// c.fillRect(0, 0, innerWidth, innerHeight);

class Stripe {
  constructor(x, width) {
    this.x = x;
    this.width = width;
  }

  draw() {
    const gradient = c.createLinearGradient(this.x, 0, this.x + this.width, 0);
    gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
    gradient.addColorStop(1, "rgba(255, 0, 0)");

    c.fillStyle = gradient;

    c.beginPath();
    c.fillRect(this.x, 0, this.width, innerHeight);
    c.closePath();
  }

  update(direction) {
    if (this.x <= -this.width) return false;
    if (this.x >= innerWidth * 2) return false;
    if (direction === "l") {
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
const stripeW = (innerWidth * 5) / 100;
const countOfStripes = Math.ceil(innerWidth / stripeW) / 2;

for (let i = 0; i < countOfStripes; i++) {
  stripes.push(new Stripe(x, stripeW));
  x += stripeW;
}

for (let i = 0; i < countOfStripes; i++) {
  stripesR.push(new Stripe(x, stripeW));
  x += stripeW;
}

const curtainsScene = () => {
  const stl = stripes.map(stripe => stripe.update("l"));

  const str = stripesR.map(stripe => stripe.update());

  return stl.some(x => x) && str.some(x => x);
};

const fireworksScene = () => {
  const STAR_COLOR = "#FFF587";
  const BUILDING_BG_COLOR = "#012c3d";
  const fireWorkColors = [
    "#FF490E",
    "#FF9D1F",
    "#FF0D4B",
    "#FFF587",
    "#F0F0F2"
  ];

  let requestId = null;
  let fireWorksNumber = 0;
  let fireWorks2Number = 0;
  let stars = [];
  let fireWorks = [];
  let fireWorks2 = [];
  let buildings = [];
  let text = null;

  window.addEventListener("resize", () => {
    init();
  });

  class Star {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.radius = r;
      this.color = STAR_COLOR;
    }

    // methods
    display() {
      if (Math.random() > 0.97) {
        return;
      }

      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.shadowColor = this.color;
      c.shadowBlur = this.radius * 3;
      c.fill();
      c.restore();
    }

    update() {
      this.display();
    }
  }

  class FireWork {
    constructor() {
      this.reset();
    }

    // methods
    reset() {
      this.x = randomIntFromRange(30, canvas.width - 30);
      this.y = randomIntFromRange(50, canvas.height / 2);
      this.particleNum = randomIntFromRange(8, 20);
      this.particleLength =
        canvas.width <= 500
          ? randomIntFromRange(5, 13)
          : randomIntFromRange(8, 20);
      this.color = randomColor(fireWorkColors);
      this.r = 0;
      this.velR = 2 + Math.random() * 2;
      this.velP = 0.3 + Math.random() * 0.25;

      if (canvas.width < 500) {
        this.particleLength = randomIntFromRange(5, 15);
        this.velR = 1 + Math.random() * 1.5;
        this.velP = 0.15 + Math.random() * 0.15;
      }
    }
    remove() {
      const index = fireWorks.indexOf(this);
      fireWorks.splice(index, 1);
    }
    display() {
      let unitAngle = (Math.PI * 2) / this.particleNum;

      c.save();
      c.strokeStyle = this.color;
      for (let i = 0; i < this.particleNum; i++) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(unitAngle * i);
        c.beginPath();
        c.moveTo(this.r, 0);
        c.lineTo(this.r + this.particleLength, 0);
        c.stroke();
        c.restore();
      }
      c.restore();
    }
    update() {
      if (this.particleLength >= 0) {
        this.r += this.velR;
        this.particleLength -= this.velP;

        this.display();
      } else {
        this.remove();
      }
    }
  }

  class FireWork2 {
    constructor() {
      this.reset();
    }

    // methods
    reset() {
      const x = randomIntFromRange(30, canvas.width - 30);
      const y = randomIntFromRange(50, canvas.height / 2);
      const color = randomColor(fireWorkColors);

      this.particleNum = randomIntFromRange(20, 30);
      this.particles = [];

      for (let i = 0; i < this.particleNum; i++) {
        const particle = new Particle(x, y, color);
        this.particles.push(particle);
      }
    }
    remove() {
      const index = fireWorks2.indexOf(this);
      fireWorks2.splice(index, 1);
    }
    update() {
      for (let j = this.particles.length - 1; j >= 0; j--) {
        const particle = this.particles[j];

        particle.update();
        if (particle.done) {
          this.particles.splice(j, 1);
        }
      }

      if (this.particles.length === 0) {
        this.remove();
      }
    }
  }

  class Particle {
    constructor(x, y, color) {
      this.position = { x, y };
      this.velocity = {
        x: randomSign() * (0.5 + Math.random() * 3),
        y: randomSign() * (0.5 + Math.random() * 3)
      };
      this.gravVel = 0;
      this.color = color;
      this.done = false;

      if (canvas.width <= 500) {
        this.radius = 3;
      } else {
        this.radius = 4;
      }
    }

    // getter
    get magnitude() {
      return Math.sqrt(
        Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2)
      );
    }

    // methods
    update() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y + this.gravVel;

      this.velocity.x *= 0.975;
      this.velocity.y *= 0.975;
      this.gravVel += 0.05;

      this.radius *= 0.975;
      this.draw();

      if (Math.abs(this.velocity.x) < 0.3) {
        this.done = true;
      }
    }
    draw() {
      c.save();
      c.fillStyle = this.color;
      c.shadowColor = this.color;
      c.shadowBlur = this.radius * 3;
      c.beginPath();
      c.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      c.fill();
      c.closePath();
      c.restore();
    }
  }

  class Text {
    constructor(color) {
      this.reset(color);
    }

    // methods
    reset(color) {
      this.content = "С Днем Рождения!!!";
      this.fontWeight = "bold";
      this.fontFamily = "Pacifico";
      this.color = color;

      if (canvas.width > 800) {
        this.fontSize = 90;
      } else if (canvas.width > 500) {
        this.fontSize = 70;
      } else {
        this.fontSize = 40;
      }
    }
    display() {
      c.save();
      c.font = `${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
      c.fillStyle = this.color;
      c.shadowColor = this.color;
      c.shadowBlur = Math.random() < 0.02 ? 0 : this.fontSize / 5;
      c.fillText(this.content, canvas.width / 2, canvas.height / 2.5);
      c.restore();
    }
  }

  class Building {
    constructor(x, y, w, h, type) {
      this.left = x;
      this.top = y;
      this.width = w;
      this.height = h;
      this.windowType = type;
    }

    // method
    draw() {
      c.save();
      c.lineJoin = "round";
      c.fillStyle = BUILDING_BG_COLOR;
      c.beginPath();
      c.moveTo(this.left, this.top);
      c.lineTo(this.left + this.width, this.top);
      c.lineTo(this.left + this.width, this.top + this.height);
      c.lineTo(this.left, this.top + this.height);
      c.closePath();
      c.fill();

      // windows
      const paddingV = this.height * 0.15,
        paddingH = this.width * 0.15;
      const gapV = this.height * 0.1,
        gapH = this.width * 0.1;
      let windows = [];

      if (this.windowType === 1) {
        const WINDOW_AMOUNT = 5;
        const windowW = this.width - paddingH * 2;
        const windowH =
          (this.height - paddingV * 2 - gapV * (WINDOW_AMOUNT - 1)) /
          WINDOW_AMOUNT;
        for (let i = 0; i < WINDOW_AMOUNT; i++) {
          const window = {
            x: this.left + paddingH,
            y: this.top + paddingV + (gapV + windowH) * i,
            w: windowW,
            h: windowH
          };
          windows.push(window);
        }
      } else if (this.windowType === 2) {
        const WINDOW_AMOUNT = 4;
        const windowW =
          (this.width - paddingH * 2 - gapH * (WINDOW_AMOUNT - 1)) /
          WINDOW_AMOUNT;
        const windowH = this.height - paddingV * 2;
        for (let i = 0; i < WINDOW_AMOUNT; i++) {
          const window = {
            x: this.left + paddingH + (gapH + windowW) * i,
            y: this.top + paddingV,
            w: windowW,
            h: windowH
          };
          windows.push(window);
        }
      }

      c.fillStyle = "rgba(255,245,135,0.5)";
      windows.forEach(window => {
        c.fillRect(window.x, window.y, window.w, window.h);
      });
      c.restore();
    }
    update() {
      this.draw();
    }
  }

  function init() {
    stars = [];
    fireWorks = [];
    fireWorks2 = [];
    buildings = [];

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let starNumber;
    const starMargin = {
      left: 10,
      right: 10,
      top: 15,
      bottom: canvas.height / 3
    };

    if (canvas.width < 500) {
      starNumber = 10;
      fireWorksNumber = 3;
      fireWorks2Number = 1;
    } else if (canvas.width < 800) {
      starNumber = 20;
      fireWorksNumber = 5;
      fireWorks2Number = 2;
    } else {
      starNumber = 30;
      fireWorksNumber = 7;
      fireWorks2Number = 3;
    }

    for (let i = 0; i < starNumber; i++) {
      const star = new Star(
        randomIntFromRange(starMargin.left, canvas.width - starMargin.right),
        randomIntFromRange(starMargin.top, canvas.height - starMargin.bottom),
        0.5 + Math.random() * 1
      );

      stars.push(star);
    }

    fireWorks.push(new FireWork());
    fireWorks2.push(new FireWork2());

    text = new Text(STAR_COLOR);

    let currX = -20;
    const minW = 25,
      maxW = 40;
    const minH = 25,
      maxH = 50;

    while (currX <= canvas.width) {
      const width = randomIntFromRange(minW, maxW);
      const height = randomIntFromRange(minH, maxH);

      buildings.push(
        new Building(
          currX,
          canvas.height - height,
          width,
          height,
          randomIntFromRange(0, 2)
        )
      );

      currX = currX + width + randomIntFromRange(10, 15);
    }
    buildings.push(
      new Building(0, canvas.height - minH * 0.45, canvas.width, minH * 0.45, 0)
    );

    c.lineWidth = canvas.width < 500 ? 2.5 : 5;
    c.lineCap = "round";
    c.textBaseline = "middle";
    c.textAlign = "center";
  }
  function animate() {
    requestId = window.requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    if (fireWorks.length < fireWorksNumber && Math.random() <= 0.05) {
      fireWorks.push(new FireWork());
    }
    if (fireWorks2.length < fireWorks2Number && Math.random() <= 0.05) {
      fireWorks2.push(new FireWork2());
    }
    stars.forEach(star => star.update());
    fireWorks.forEach(fireWork => fireWork.update());
    fireWorks2.forEach(fireWork2 => fireWork2.update());
    text.display();
    buildings.forEach(building => building.update());
  }
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  function randomSign() {
    return Math.random() < 0.5 ? 1 : -1;
  }
  init();
  animate();
};

const interval = setInterval(() => {
  c.clearRect(0, 0, innerWidth, innerHeight);
  const res = curtainsScene();
  c.beginPath();
  if (!res) {
    fireworksScene();
    dispatchEvent(new Event('sceneFinish'));
    clearInterval(interval);
    console.log("finish scene 1");
  }
}, 9);
