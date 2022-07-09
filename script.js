// "use strict";
// const mousePosition = document.querySelectorAll(".mouse-move");

// document.addEventListener("mousemove", (e) => {
//   setInterval(mouse, 3000);
//   let arrX = [],
//     arrY = [];
//   function mouse() {
//     console.log(e.x, e.y);
//     arrX.push(e.x);
//     arrY.push(e.y);
//     arrX.length > 10 ? arrX.unshift() : true;
//     arrY.length > 10 ? arrY.unshift() : true;
//     console.log(arrX, arrY);
//     mousePosition.forEach((pos, i) => {
//       pos.style.top = arrY[i] + "px";
//       pos.style.left = arrX[i] + "px";
//     });
//   }
// });
