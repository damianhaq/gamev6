export const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
export const c = canvas.getContext("2d") as CanvasRenderingContext2D;

console.log("asd");

function animate(deltaTime: number) {
  c.rect(0, 0, 50, 50);
  c.stroke();
}

requestAnimationFrame(animate);
