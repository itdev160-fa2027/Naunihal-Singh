let tasks=[];
let taskIdCounter=1;

// part B: method to add task from user input
function addTask()
{
    const taskInput= document.getElementById("taskInput");
    const taskText= taskInput.value.trim();
    console.log(`Attempting to add task: "${taskText}"`);

    //vaildate input 
    if (taskText === "")
        {alert("PLease enter a task!");
            console.log("Task addition failed: empty input");
            return;
        }

    if (taskText.length>100)
    {
        alert("Task is too long! Please keep it under 100 characters.");
        console.log("Task addition failed: task too long");
        return;
    }

    // create new task object
    const task= {
        id: taskIdCounter++,
        text: taskText,
        completed:false,
        createdAt: new Date()
    };

    // add task to tasks array
    tasks.push(task);
    console.log("Task added to array:", task);

    // create list item element
    const listItem= createTaskElement(task);

    // append to list
    const todoList= document.getElementById("todo-List");
    todoList.appendChild(listItem);

    // clear input
    taskInput.value="";

    // update statistics
    updateTaskStats();
    console.log(`task "${taskText}" added successfully. Total tasks: ${tasks.length}`);
}

// part-c build the list item for a task 

function createTaskElement(task)
{
    // create list item
    const listItem = document.createElement("li");

    listItem.className = "task-item";
    listItem.setAttribute("data-task-id", task.id);

    // create task text span
    const taskTextSpan = document.createElement("span");

    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = task.text;

    // create status span
    const statusSpan = document.createElement("span");

    statusSpan.className = "status";

    // set initial state
    if (task.completed)
    {
        listItem.classList.add("done");

        statusSpan.textContent = "\u2713 Done";
        statusSpan.classList.add("status-done");
    }
    else
    {
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.classList.add("status-pending");
    }

    // append spans to list item
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(statusSpan);

    // add click event to toggle
    listItem.onclick = function()
    {
        toggleTaskCompletion(task.id);
    };

    console.log("Created task element:", listItem);

    return listItem;
}
// part-d : toggle a tasks completion state

function toggleTaskCompletion(taskId)
{
    console.log(`Toggling completion for task ID:${taskId}`);

    // find task in array 
    const task = tasks.find(t=>t.id ===taskId);
    if(!task)
    {
        console.error(`task with ID: ${taskId} not found`);
        return;
    } 
    
    // toggle completion status
    task.completed=!task.completed;
    console.log(`task ${task.text} is now ${task.completed ? 'completed' : 'pending'}`);

    // find and update DOM element
    const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const statusSpan= listItem.querySelector(".status");
    
    if(task.completed)
    {
        listItem.classList.add("done");
        statusSpan.textContent="\u2713 Done";
        statusSpan.classList.remove("status-pending");
        statusSpan.classList.add("status-done");
    }
    else
    {
        listItem.classList.remove("done");
        statusSpan.textContent="\u23F3 Pending";
        statusSpan.classList.remove("status-done");
        statusSpan.classList.add("status-pending");
    }

    // update statistics
    updateTaskStats();
}

// part-e: update the task statistics

function updateTaskStats()
{
    const totalTasks=tasks.length;
    const completedTasks=tasks.filter(task=> task.completed).length;
    const pendingTasks= totalTasks-completedTasks;

    // update DOM elements
    document.getElementById("taskCount").textContent= `(${totalTasks} task${totalTasks !==1 ? 's' :''})`;
    document.getElementById("completedTasks").textContent= `Completed: ${completedTasks}`;
    document.getElementById("pendingTasks").textContent= `Pending: ${pendingTasks}`;

    console.log(`stats updated - Total: ${totalTasks}, completed ${completedTasks}, pending: ${pendingTasks}`);
}

// part-f: Add task with enter key and also button

document.getElementById("taskInput").onkeydown= function(event)
{
    if(event.key==="Enter")
    {
        addTask();
    }
};

document.getElementById("addTaskButton").onclick= function()
{
    addTask();
};

console.log("To-Do List application loaded successfully.");