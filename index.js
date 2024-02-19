const showBtn = document.getElementById("add-btn");
const myDisplay = document.getElementById("information");
let look = "none";
showBtn.addEventListener("click", () => {
  if (look == "none") {
    myDisplay.style.display = "flex";
    look = "flex";
  } else if ((look = "flex")) {
    myDisplay.style.display = "none";
    look = "none";
  }
});
