"use strict";

const todoButton = document.getElementById("todoButton");
const messageText = document.getElementById("messageText");
const todoId = document.getElementById("todoId");

window.onload = init;

function init(){

  todoButton.onclick = onTodoButtonClick;

}

function onTodoButtonClick() {
  console.log("clicked");

  let theUrl = "http://localhost:3000/todos/" + todoId.value;
  fetch(theUrl)
  .then((response) => response.json())
  .then(data => {
    console.log(data);
  
    let message = `TODO ID: ${data.id}  ${data.title} completed:  ${data.completed} User:  ${data.userId}`
    messageText.innerHTML=message;
      
  });
}


