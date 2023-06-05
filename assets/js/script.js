// themeChanger function to switch between dark and light theme 

let isLightTheme = false; // this variable assist the themechanger function

function themeChanger() {
    if (!isLightTheme) {
        isLightTheme = true;
        document.body.style.background = "black"; 
        document.body.style.color = "whitesmoke";
        document.getElementById("start").style.color = "whitesmoke";
        document.getElementById("start").style.backgroundColor = "black";
        document.getElementById("task-table").style.borderColor = "whitesmoke";
        document.getElementById("task-table").style.backgroundColor = "gray";
        document.getElementById("main-outer").style.background = "url(/assets/images/dark.jpg)";
        document.getElementById("welcome").style.color = "cyan";
        document.getElementById("task-count").style.color = "cyan";
        document.getElementById("toggle").style.backgroundColor = "whitesmoke";
        document.getElementById("toggle").style.color = "black";
        document.getElementById("toggle").innerText = "Light Mode";
        document.getElementById("task-actions-popup").style.backgroundColor = "lightgrey";
        document.getElementById("highlight-task").style.backgroundColor = "lightgrey";
        document.getElementById("mark-done").style.backgroundColor = "lightgrey";
        document.getElementById("delete").style.backgroundColor = "lightgrey";
        document.getElementById("submit-task").style.backgroundColor = "lightgrey";
        document.getElementById("submit-new-task").style.backgroundColor = "lightgrey";
        document.getElementById("selected-task").style.color = "darkblue";
        document.getElementById("reset-table").style.backgroundColor = "lightgray";
        document.getElementById("add-task").style.backgroundColor = "lightgray";

          let tableDatas = document.getElementsByTagName("td");
          for (let tableData of tableDatas){
            tableData.style.borderColor = "whitesmoke";
            tableData.style.color = "whitesmoke";
          }

          let tableHeads = document.getElementsByTagName("th");
          for (let tableHead of tableHeads){
            tableHead.style.borderColor = "whitesmoke";
            tableHead.style.color = "black";
          }

          let closeButtons = document.getElementsByClassName("close");
          for (let closeButton of closeButtons){
            closeButton.style.backgroundColor = "lightgrey";
          }
          alert("You are switching to dark mode!");
          return;
          
    }  else if(isLightTheme) {
        isLightTheme = false;
        document.body.style.backgroundColor = "lavender";
        document.body.style.color = "darkblue";
        document.getElementById("start").style.color = "green";
        document.getElementById("start").style.backgroundColor = "whitesmoke";
        document.getElementById("task-table").style.backgroundColor = "whitesmoke";
        document.getElementById("task-table").style.borderColor = "darkblue";
        document.getElementById("main-outer").style.background = "url(/assets/images/light.jpg)";
        document.getElementById("main-outer").style.backgroundSize = "cover";
        document.getElementById("toggle").style.backgroundColor = "black";
        document.getElementById("toggle").style.color = "whitesmoke";
        document.getElementById("toggle").innerText = "Dark Mode";
        document.getElementById("welcome").style.color = "blue";
        document.getElementById("task-count").style.color = "blue";
        document.getElementById("task-actions-popup").style.backgroundColor = "whitesmoke";
        document.getElementById("task-actions-popup").style.backgroundColor = "whitesmoke";
        document.getElementById("highlight-task").style.backgroundColor = "whitesmoke";
        document.getElementById("mark-done").style.backgroundColor = "whitesmoke";
        document.getElementById("delete").style.backgroundColor = "whitesmoke";
        document.getElementById("submit-task").style.backgroundColor = "whitesmoke";
        document.getElementById("submit-new-task").style.backgroundColor = "whitesmoke";
        document.getElementById("reset-table").style.backgroundColor = "inherit";
        document.getElementById("add-task").style.backgroundColor = "inherit";
        
        let closeButtons = document.getElementsByClassName("close");
          for (let closeButton of closeButtons){
            closeButton.style.backgroundColor = "lavander";
          }

        let tableDatas = document.getElementsByTagName("td");
          for (let tableData of tableDatas){
            tableData.style.borderColor = "darkblue";
            tableData.style.color = "darkblue";
          }

          let tableHeads = document.getElementsByTagName("th");
          for (let tableHead of tableHeads){
            tableHead.style.borderColor = "darkblue";
            tableHead.style.color = "darkblue";
          }
          alert("You are switching to light mode!");
    }   
}


// adding eventlisterners to start and close buttons of first task entry popup

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("submit-task").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("close-task-entry").addEventListener("click", function () {
    document.getElementById("submit-task").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("task-entry-box").value = ""; 
});

function taskIdentifier() {}

function firstTask(){}

function newTask(){}

function resetTable(){}

function createEditPopup(selectedTask){}

function highlightTask () {}

function markDone () {}

function deleteTask () {}

function refreshTable () {}