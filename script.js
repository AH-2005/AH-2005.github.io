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
    const title = querySelector("#titleField").value;
    const description = querySelector("#description").value;
    const date = querySelector("#dateField").value;
    const priority = querySelector("#priorityLevel").value;
  let activeTask = {
    title: title,
    description: description,
    date: date,
    priority: priority,
    //get displayTask() {
      //return this.name;
    }

  const taskCard = document.createElement("li");
  taskCard.innerHTML = activeTask.title;
  document.querySelector("#activeList").append(taskCard)
    
  return false;
  //  document.createElement("div").innerHTML = activeTask.displayTask; 
  //}
//let taskDiv = document.createElement("div") 
   // taskDiv.append(document.createElement("p").innerText = activeTask.name)
    


    

    //let li = document.createElement("li")
    //li.innerHTML = activeTask;
   // document.querySelector("#activeList").append(li);
    
    //Updating counter for active tasks
   // activeCounter++;
     //document.querySelector("#activeCounter").innerHTML = activeCounter;
  }
  
//Hiding and displaying tasks by priority
  document.querySelector("#priority").onchange = function () {
    
  }
})
