document.addEventListener("DOMContentLoaded", function () {
  // Disabling submit button by default
document.querySelector("#addTask").disabled = true;
  //Preventing creation of tasks with empty titles
  document.querySelector("#titleField").onkeyup = function () {
    if (!document.querySelector("#titleField").value.length > 0) {
      document.querySelector("#addTask").disabled = true;
    } else {
      document.querySelector("#addTask").disabled = false;
    }
  }
  
let activeTasks = [];
let activeCounter = 0;

//Adding a task
  document.querySelector("#addTask").onclick = function() {

    //Creating a task object
  let activeTask = {}; 
    activeTask.name = querySelector("#titleField").value;
    activeTask.description = querySelector("#description").value;
    activeTask.date = querySelector("#dateField").value;
    activeTask.priority = querySelector("#priorityLevel").value;

//let taskDiv = document.createElement("div") 
   // taskDiv.append(document.createElement("p").innerText = activeTask.name)
    
activeTask.displayTask = function () {
  return `${activeTask.name}`;
}


    //let li = document.createElement("li")
    //li.innerHTML = activeTask;
   // document.querySelector("#activeList").append(li);
    
    //Updating counter for active tasks
    activeCounter++;
     document.querySelector("#activeCounter").innerHTML = activeCounter;
  }
  
//Hiding and displaying tasks by priority
  document.querySelector("#priority").onchange = function () {
    
  }
})
