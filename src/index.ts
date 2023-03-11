const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const c = canvas.getContext("2d") as CanvasRenderingContext2D;

// Style
document.body.style.margin = "0";
canvas.style.border = "1px solid black";
canvas.width = 1920;
canvas.height = 1080;

const spriteSheet = new Image();
spriteSheet.src = "./assets/tile.png";

function animate(dt: number) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(spriteSheet, 0, 0);
  c.arc(100, 100, 30, 0, Math.PI * 2);
  c.stroke();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
