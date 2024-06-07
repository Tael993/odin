const list = document.querySelector("ul");
const input = document.querySelector("input");
const addItem = document.querySelector("button");

// Create function that will run in response to button being clicked

addItem.addEventListener("click", () =>  {
    // Start off by storing the current value of input element in a variable
    const myItem = input.value;
    input.value = '';
});

// Create three new elements - list item, span, button, store in variables
const listItem = document.createElement("li");
const listText = document.createElement("span");
const listBtn = document.createElement("button");

// Append span and button as children of list item
listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';

// Append list item as child of list
list.appendChild(listItem);

listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
});

input.focus();