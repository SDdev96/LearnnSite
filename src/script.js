// console.log("active");

const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {
  console.log(backBtn.id + " click");
  window.scrollTo(0, 0);
});

backBtn.addEventListener("mouseover", function () {
  console.log(backBtn.id + " hover");
});

window.addEventListener("scroll", function () {
  let posY = window.scrollY;
  //   console.log(posY);

  if (posY < 1000) {
    backBtn.classList.remove("visible");
  } else {
    backBtn.classList.add("visible");
  }
});
