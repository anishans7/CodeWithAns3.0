// let logo = document.querySelector('#logo');
// let hero = document.querySelector('#hero_logo');
// logo.addEventListener('mousemove',function(event) {
// logo.style.left = event.x + 'px';
// logo.style.top = event.y + 'px';

// })

let logo = document.querySelector("#curser");
let box = document.querySelector(".feature-box");

box.addEventListener("mousemove", function (event) {
  logo.style.left = event.clientX + "px";
  logo.style.top = event.clientY + "px";
  logo.addEventListener("mousemove", function (event) {
    logo.style.opacity = 1;
});
});


  