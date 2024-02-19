const showBtn = document.getElementById("add-btn");
const myDisplay = document.getElementById("information");
const myInput = document.getElementById("myInput");
const addBtn = document.getElementById("AddBtn");
let look = "none";
let task;
showBtn.addEventListener("click", () => {
  if (look == "none") {
    myDisplay.style.display = "flex";
    look = "flex";
  } else if ((look = "flex")) {
    myDisplay.style.display = "none";
    look = "none";
  }
});

addBtn.addEventListener("click", () => {
  let task = myInput.value;
  console.log(task);
  myDisplay.style.display = "none";
  look = "none";
  const newDiv = createElement("label", window);
  newDiv.textContent("");
});
