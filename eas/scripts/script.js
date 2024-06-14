/* 
    Create divs
        best to put grid squares inside "container" div (can be written in HTML)
*/
const container = document.querySelector("#container");

const refresh = document.createElement("button");
refresh.setAttribute("id", "button");

container.appendChild(refresh);
refresh.innerHTML = "Refresh";

function createDiv() {
  const square = document.createElement("div");

  square.setAttribute("id", "sqr");

  return square;
}

function createMultipleDivs(size) {
  for (let i = 0; i < size * size; i++) {
    container.appendChild(createDiv());
  }
}

function sketch() {
  // Change color of grid element when mouse goes over, like a pen
  document.querySelectorAll("#sqr").forEach((elem) =>
    elem.addEventListener("mouseover", (event) => {
      event.target.setAttribute("style", "background-color: red");
    })
  );
};

createMultipleDivs(64);

const btn = document.querySelector("#button");

btn.addEventListener("click", (event) => {
  document.querySelectorAll("#sqr").forEach((elem) => elem.remove());

  createMultipleDivs(64);
  sketch();
});

sketch();



/* 
    Add a button on the top of the screen that will 
    send the user a popup asking for the number of squares 
    per side for the new grid. Once entered, 
    the existing grid should be removed, 
    and a new grid should be generated in the 
    same total space as before (e.g., 960px wide) 
    so that you’ve got a new sketch pad.

    Tip: Set the limit for the user input to a maximum of 100. 
    A larger number of squares results in more computer 
    resources being used, potentially causing delays, 
    freezing, or crashing that we want to prevent.

    Research button tags in HTML and how you can make a 
    JavaScript function run when one is clicked.
    Also check out prompts.
    You should be able to enter 64 and have a 
    brand new 64x64 grid pop up without changing the 
    total amount of pixels used.
*/
