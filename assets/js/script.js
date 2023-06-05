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



// taskidentifier identifies which task has been selected by user for editing
function taskIdentifier() {
    let buttons = document.querySelectorAll(".edit-button"); 
    buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
    let parent = e.target.parentElement;
    let selectedRow = parent.parentElement.cells[0].innerHTML;
    console.log(selectedRow);
    createEditPopup (selectedRow);
    console.log(parent);
  });
});
}


/* enters first task into table
 * checks and sends alerts if empty or no data is submitted
 * generates edit button for the task
 * if properly submitted sends alert and close the popoup after clearing textbox
 * changes total task count
*/
function firstTask(){
    let taskEntered = document.getElementById("task-entry-box").value.trim();
    if (taskEntered === ""){
        alert("Please add some content to your task");   
    } else {
    let table = document.getElementById("task-table");
    let tableRows = table.rows.length;
    let newRow = table.insertRow(tableRows++);
    let button = document.createElement("button");
        button.innerText = "EDIT";
        button.className = "edit-button";
        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let newCell3 = newRow.insertCell(2);

        newCell1.innerHTML = --tableRows;
        newCell2.innerHTML = taskEntered;
        
        newCell3.append(button);
        taskIdentifier ();
        
    document.getElementById("submit-task").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("task-actions").style.display = "block";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("task-count").innerText = "Total Tasks:" + tableRows;
    alert("Congratulations on adding your first task :)");
    document.getElementById("task-entry-box").value = ""; 
}
}


// adding eventlisterners to start and close buttons of subsequent task entry popup
document.getElementById("add-task").addEventListener("click", function () {
    document.getElementById("submit-new-task").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("new-task-close").addEventListener("click", function () {
    document.getElementById("submit-new-task").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("new-task-box").value = "";
});



/* enters susequent tasks into table
 * checks and sends alerts if empty or no data is submitted
 * generates edit button for each task
 * if properly submitted sends alert and close the popoup after clearing textbox
 * changes total task count
*/
function newTask(){
    let taskEntered = document.getElementById("new-task-box").value.trim();
    if (taskEntered === ""){
        alert("Please add some content to your task");
    } else {
        let table = document.getElementById("task-table");
        let tableRows = table.rows.length;
        let newRow = table.insertRow(tableRows++);
        let button = document.createElement("button");
        button.innerText = "EDIT";
        button.className = "edit-button";
        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let newCell3 = newRow.insertCell(2);

        newCell1.innerHTML = --tableRows;
        newCell2.innerHTML = taskEntered;
        button.setAttribute("id",newCell1.innerHTML);
        newCell3.append(button);
        taskIdentifier ();

        document.getElementById("task-count").innerText = "Total Tasks -"+ tableRows;
        document.getElementById("submit-new-task").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        alert("Congratulations on adding new task :)");
        document.getElementById("new-task-box").value = "";
    }
}



/*  resets entire table by deleting all tasks
 *  sents alert to user
 *  hides task action buttons and brings up first task addition button
 *  changes total task count
*/
function resetTable() {
    let table = document.getElementById("task-table");
    let tableRows = table.rows.length; 
    document.getElementById("task-count").innerText = "You Have No Tasks !";
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("task-actions").style.display = "none";
    alert("You have removed all tasks, table has been reset.");
    for (let i = 1;i<tableRows;) {
       table.deleteRow(i);
    }
}


//  adding eventlistener to edit popup close button 
document.getElementById("close-actions").addEventListener("click", function () {
    document.getElementById("task-actions-popup").style.display="none";
    document.getElementById("overlay").style.display="none";
});



/* opens edit popup
 * identifies and shows which task was selected to edit
 * switches button content (for eg: highlight or remove highlight) basis previous edits by user
 */
function createEditPopup(selectedTask) {
    document.getElementById("task-actions-popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("selected-task-no").innerHTML = selectedTask;
    let table = document.getElementById("task-table");
    let cellColor = table.rows[selectedTask].cells[1].style.backgroundColor;

    if ( cellColor === "rgba(255, 0, 0, 0.2)"){
        document.getElementById("highlight-task").innerHTML = "Remove Highlight";
        document.getElementById("mark-done").innerHTML = "Mark Done";
    } else if (cellColor === "rgba(0, 255, 0, 0.2)") {
        document.getElementById("mark-done").innerHTML = "Remove Done";
        document.getElementById("highlight-task").innerHTML = "Highlight";
    } else {
        document.getElementById("highlight-task").innerHTML = "Highlight";
        document.getElementById("mark-done").innerHTML = "Mark Done";
    }
}



// highlights or remove highlight (basis background color = red tone)
function highlightTask() {
    let selectedTask = document.getElementById('selected-task-no').innerHTML;
    let table = document.getElementById("task-table");
    let cellColor = table.rows[selectedTask].cells[1].style.backgroundColor;

    if (cellColor === "rgba(255, 0, 0, 0.2)") {
        table.rows[selectedTask].cells[1].style.backgroundColor = "inherit";
        document.getElementById("highlight-task").innerHTML = "Highlight";
    } else if (cellColor !== "rgba(255, 0, 0, 0.2)") {
        table.rows[selectedTask].cells[1].style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        document.getElementById("highlight-task").innerHTML = "Remove Highlight";
        document.getElementById("mark-done").innerHTML = "Mark Done";
    } 
}



// sets background color to green or removes it basedon user input
function markDone() {
    let selectedTask = document.getElementById('selected-task-no').innerHTML;
    let table = document.getElementById("task-table");
    if (table.rows[selectedTask].cells[1].style.backgroundColor === "rgba(0, 255, 0, 0.2)") {
        table.rows[selectedTask].cells[1].style.backgroundColor = "inherit";
        document.getElementById("mark-done").innerHTML = "Mark Done";
    } else if (table.rows[selectedTask].cells[1].style.backgroundColor !== "rgba(0, 255, 0, 0.2)") {
        table.rows[selectedTask].cells[1].style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        document.getElementById("mark-done").innerHTML = "Remove Done";
        document.getElementById("highlight-task").innerHTML = "Highlight";
    } 
}



/* removes selected task
 * sends alert to user regarding deletion
 * if no tasks notifies user again through alert
 * refreshes table by chnaging the task numbers 
 * closes the edit box
 */
function deleteTask() {
    let selectedTask = document.getElementById('selected-task-no').innerHTML;
    let table = document.getElementById("task-table");
    table.deleteRow(selectedTask);
    let tableRows = table.rows.length;
    alert("Your have deleted task number - "+selectedTask);
        
        if (table.rows.length === 1) {
            document.getElementById("task-count").innerText = "You Have No Tasks !"; 
            document.getElementById("task-actions-popup").style.display = "none";  
            document.getElementById("overlay").style.display = "none";  
            alert("You have no more Tasks!");
            document.getElementById("task-actions").style.display = "none"; 
            document.getElementById("start").style.display = "inline-block";
        } else {
        document.getElementById("task-count").innerText = "Total Tasks -"+ (tableRows-1);
        document.getElementById("task-actions-popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";     }  
        refreshTable();  
}

function refreshTable() {}