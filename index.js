const showBtn = document.getElementById("add-btn");
const myDisplay = document.querySelector(".information");
const myInput = document.getElementById("myInput");
const addBtn = document.getElementById("AddBtn");
const mainContent = document.getElementById("main-content");

showBtn.addEventListener("click", () => {
  myDisplay.classList.toggle("show");
});

addBtn.addEventListener("click", () => {
  myDisplay.classList.toggle("show");
  let inputValue = myInput.value;
  let task = document.createElement("span");
  let taskContent = document.createTextNode("1. " + inputValue);
  task.appendChild(taskContent);
  document.body.insertBefore(task, mainContent);
});
