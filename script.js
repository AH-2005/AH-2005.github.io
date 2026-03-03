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
  document.querySelector("form").onsubmit = function() {

    //Creating a task object
    const title = document.querySelector("#titleField").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#dateField").value;
    const priority = document.querySelector("#priorityLevel").value;
  //let activeTask = {
    //title: title,
    //description: description,
    //date: date,
    //priority: priority,
    //get displayTask() {
      //return this.name;
    //
    
  const taskCardLi = document.createElement("li");
  document.querySelector("#activeList").append(taskCardLi)
    
  const taskCardDiv = document.createElement("div");
  taskCardDiv.setAttribute("id", "taskCardDiv");
  taskCardLi.append(taskCardDiv);

  

  const displayedTitle = document.createElement("h4");
  displayedtitle.innerHTML = title;
  taskCardDiv.append(displayedTitle);  
    return false;
    
  const displayedDescription = document.createElement("p");
  displayedDescription.innerHTML = description;
  taskCardDiv.append(displayedDescription);

  const displayedDate = document.createElement("p");
  displayedDate.innerHTML = date;
  taskCardDiv.append(displayedDate);

    
  
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
//  document.querySelector("#priority").onchange = function () {
    
  //}
})
