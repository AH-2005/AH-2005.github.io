document.addEventListener("DOMContentLoaded", function () {
document.querySelector("#addTask").disabled = true;
  document.querySelector("#titleField").onkeyup = function () {
    if (!document.querySelector("#titleField").value.length > 0) {
      document.querySelector("#addTask").disabled = true;
    } else {
      document.querySelector("#addTask").disabled = false;
    }
  }
  
let activeTasks = [];
let activeCounter = 0;


  document.querySelector("#addTask").onclick = function addTask () {
    
  let activeTask = {}; 
    activeTask.name = querySelector("#titleField").value;
    activeTask.description = querySelector("#description").value;
    activeTask.date = querySelector("#dateField").value;
    activeTask.priority = querySelector("#priorityLevel").value;

    let li = document.createElement("li")
    li.innerHTML = activeTask.name;
    document.querySelector("#activeList").append(li);
  }
})
