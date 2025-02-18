let input = document.querySelector("#search");
let todoList = document.querySelector("#to-do");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && this.value.trim() !== "") {
    addtodo(this.value.trim());
    this.value = "";
  }
});

const addtodo = (input) => {
  const li = document.createElement("li");
  li.textContent = input;

  const bin = document.createElement("img");
  bin.src = "/image.png"; // Replace with actual delete icon path
  bin.alt = "Delete";
  bin.style.cursor = "pointer";

  bin.addEventListener("click", function () {
    li.style.animation = "fadeOut 0.3s forwards";
    setTimeout(() => li.remove(), 300);
  });

  li.appendChild(bin);
  todoList.appendChild(li);
};
