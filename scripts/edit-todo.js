"use strict";

const todoButtonSubmit = document.getElementById("todoButtonSubmit");
const messageText = document.getElementById("messageText");
const todoId = document.getElementById("todoId");

window.onload = init;

function init() {
  todoButtonSubmit.onclick = onTodoButtonClick;
}

// function populateForm() {
//     console.log("clicked");

//     let theUrl = "http://localhost:3000/todos/" + todoId.value;
//     fetch(theUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         let message = `TODO ID: ${data.id}  ${data.title} completed:  ${data.completed} User:  ${data.userId}`;
//         messageText.innerHTML = message;
//       });
// }

function onTodoButtonClick() {
  console.log("clicked");

  let theUrl = "http://localhost:3000/todos/" + todoId.value;
  fetch(theUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let message = `TODO ID: ${data.id}  ${data.title} completed:  ${data.completed} User:  ${data.userId}`;
      messageText.innerHTML = message;
    });
}
