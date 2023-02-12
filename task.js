// function div1() {
//   document.querySelector(".page1").style.display = "block";
//   document.querySelector(".page2").style.display = "none";
//   document.querySelector(".page3").style.display = "none";
//   document.querySelector(".page4").style.display = "none";
// }
// function div2() {
//   document.querySelector(".page1").style.display = "none";
//   document.querySelector(".page2").style.display = "block";
//   document.querySelector(".page3").style.display = "none";
//   document.querySelector(".page4").style.display = "none";
// }
// function div3() {
//   document.querySelector(".page1").style.display = "none";
//   document.querySelector(".page2").style.display = "none";
//   document.querySelector(".page3").style.display = "block";
//   document.querySelector(".page4").style.display = "none";
// }
// function div4() {
//   document.querySelector(".page1").style.display = "block";
//   document.querySelector(".page2").style.display = "block";
//   document.querySelector(".page3").style.display = "block";
// }

// fetch all divs inside allDives and store them in allDivs variable
const allDivs = document.querySelectorAll(".allDives div");

function showDivs(classNAme) {
  allDivs.forEach((div) => {
    if (div.classList[0] === classNAme) {
      div.classList.add("d-block");
      div.classList.remove("d-none");
    } else {
      div.classList.add("d-none");
      div.classList.remove("d-block");
    }
  });
  // display all divs
  if (classNAme === "all") {
    allDivs.forEach((div) => {
      div.classList.add("d-block");
      div.classList.remove("d-none");
    });
  }
}
