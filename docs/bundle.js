/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\r\nconst canvas = document.querySelector(\"#canvas\");\r\nconst c = canvas.getContext(\"2d\");\r\n// Style\r\ndocument.body.style.margin = \"0\";\r\ncanvas.style.border = \"1px solid black\";\r\ncanvas.width = 1920;\r\ncanvas.height = 1080;\r\nconst spriteSheet = new Image();\r\nspriteSheet.src = \"./assets/tile.png\";\r\nfunction animate(dt) {\r\n    c.clearRect(0, 0, canvas.width, canvas.height);\r\n    c.drawImage(spriteSheet, 0, 0);\r\n    c.arc(100, 100, 30, 0, Math.PI * 2);\r\n    c.stroke();\r\n    requestAnimationFrame(animate);\r\n}\r\nrequestAnimationFrame(animate);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFzQixDQUFDO0FBQ3RFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUE2QixDQUFDO0FBRTlELFFBQVE7QUFDUixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBRXJCLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDaEMsV0FBVyxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQztBQUV0QyxTQUFTLE9BQU8sQ0FBQyxFQUFVO0lBQ3pCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDWCxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1ldjYvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuY29uc3QgYyA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuLy8gU3R5bGVcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuY2FudmFzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbmNhbnZhcy53aWR0aCA9IDE5MjA7XHJcbmNhbnZhcy5oZWlnaHQgPSAxMDgwO1xyXG5cclxuY29uc3Qgc3ByaXRlU2hlZXQgPSBuZXcgSW1hZ2UoKTtcclxuc3ByaXRlU2hlZXQuc3JjID0gXCIuL2Fzc2V0cy90aWxlLnBuZ1wiO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZShkdDogbnVtYmVyKSB7XHJcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICBjLmRyYXdJbWFnZShzcHJpdGVTaGVldCwgMCwgMCk7XHJcbiAgYy5hcmMoMTAwLCAxMDAsIDMwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgYy5zdHJva2UoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbn1cclxuXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;