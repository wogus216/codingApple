var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let reds = [];
function play() {
  requestAnimationFrame(play);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (timer % 120 === 0) {
    let cactus = new Cactus();
    reds.push(cactus);
  }
  reds.forEach((a) => {
    a.x--;
    a.draw();
  });

  dino.draw();
}
play();
