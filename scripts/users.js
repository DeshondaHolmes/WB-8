"use strict";

const table = document.getElementById("userTable");

window.onload = init;

function init() {
  showUsers();
}

function showUsers() {
  console.log("clicked");

  let theUrl = "https://jsonplaceholder.typicode.com/users";
  fetch(theUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
            let row = table.insertRow(-1);
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            let cell5 = row.insertCell();
            let cell6 = row.insertCell();
    
            cell1.innerHTML = data[i].name;
            cell2.innerHTML = data[i].email;
            cell3.innerHTML = data[i].phone;
            cell4.innerHTML = data[i].website;
            cell5.innerHTML = data[i].company.name;
            cell6.innerHTML = data[i].company.catchPhrase;
        

        }
    });
}
