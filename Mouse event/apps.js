let main = document.querySelector(".main");
let cur = document.querySelector(".curser")

main.addEventListener("mousemove",function(dets) {
    cur.style.left = dets.x + "px";
    cur.style.top = dets.y + "px";
});