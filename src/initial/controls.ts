import { keys } from "../variable";

export function controls_() {
  document.body.addEventListener("keydown", (ev: KeyboardEvent) => {
    if (ev.code === "KeyW") keys.w = true;
    if (ev.code === "KeyS") keys.s = true;
    if (ev.code === "KeyA") keys.a = true;
    if (ev.code === "KeyD") keys.d = true;
    if (ev.code === "Space") keys.space = true;
    if (ev.code === "Escape") keys.escape = true;

    // console.log(keys);
  });

  document.body.addEventListener("keyup", (ev: KeyboardEvent) => {
    if (ev.code === "KeyW") keys.w = false;
    if (ev.code === "KeyS") keys.s = false;
    if (ev.code === "KeyA") keys.a = false;
    if (ev.code === "KeyD") keys.d = false;
    if (ev.code === "Space") keys.space = false;
    if (ev.code === "Escape") keys.escape = false;

    // console.log(ev.code);
  });

  document.addEventListener("mousedown", (ev: MouseEvent) => {
    keys.mouse.click = true;
    keys.mouse.x = ev.offsetX;
    keys.mouse.y = ev.offsetY;
  });

  document.addEventListener("mouseup", (ev: MouseEvent) => {
    keys.mouse.click = false;
  });

  document.addEventListener("mousemove", (ev: MouseEvent) => {
    keys.mouse.x = ev.offsetX;
    keys.mouse.y = ev.offsetY;
  });
}
