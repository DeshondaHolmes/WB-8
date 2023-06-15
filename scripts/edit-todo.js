"use strict";

const todoButtonSubmit = document.getElementById("todoButtonSubmit");
const todoTitle = document.getElementById("todoTitle");
const todoCompleted = document.getElementById("todoCompleted");
const todoUserId = document.getElementById("todoUserId");
const todoButtonUpdate = document.getElementById("todoButtonUpdate");

const messageText = document.getElementById("messageText");
const errorMessageText = document.getElementById("errorMessageText");
const todoId = document.getElementById("todoId");

const editForm = document.getElementById("editForm");


window.onload = init;

function init() {
  todoButtonSubmit.onclick = onTodoButtonClick;
  todoButtonUpdate.onclick = onTodoButtonUpdateClick;

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

  editForm.style.display = "block";
  console.log("clicked");

  let theUrl = "http://localhost:3000/todos/" + todoId.value;
  fetch(theUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      todoTitle.value = data.title;
     
      todoCompleted.value = data.completed;
      
      todoUserId.value = data.userId;
    });
}

function onTodoButtonUpdateClick() {
  

  let bodyData = {
    title: todoTitle.value,
    completed: todoCompleted.value,
    userId: todoUserId.value,
  }
  // Send the request

  let theUrl = "http://localhost:3000/todos/" + todoId.value;
  fetch(theUrl , {
    method: "PUT",
    body: JSON.stringify(bodyData),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(data => {
      // If the POST finishes successfully, display a message

      console.log("i work");

      messageText.innerHTML = "You have successfully edit this TODO"


    })
    .catch(err => {
      // If the POST returns an error, display a message

      errorMessageText.innerHTML = "Unexpected error";
    });

}


