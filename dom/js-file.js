// Reference to "container" div that already exists in html
const container = document.querySelector("#container");

// Create new div, store it in variable "content"
const content = document.createElement("div");
// Add class and some text
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
// Append div to "container"
container.appendChild(content);

const red = document.createElement("p");
red.classList.add("red");
red.textContent = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

const blue = document.createElement("h3");

blue.classList.add("blue");
blue.textContent = "I'm a blue h3!";
blue.style.color = "blue";
container.appendChild(blue);

const div = document.createElement("div");

div.classList.add("pretty");
div.setAttribute("style", "background: pink; border: black");

const head = document.createElement("h1");
head.textContent = "I'm in a div";
div.appendChild(head);

const para = document.createElement("p");
para.textContent = "ME TOO";
div.appendChild(para);

container.appendChild(div);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})