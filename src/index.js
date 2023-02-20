const app = document.querySelector('#app');
const createTaskButton = app.querySelector('#create-task');
const deleteTaskButton = app.querySelector('#delete-task');
const createProjectButton = app.querySelector('#create-project');
const deleteProjectButton = app.querySelector('#delete-project');

let task;
let taskList = [];

// Create a new task
function createTask(name, description, dueDate, project) {
    return {
        name,
        description,
        dueDate,
        project,
    };
}

let task1 = createTask(
    'My Task',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    '03/02/2034',
    'Side Project'
);

taskList.push(task1);

console.log(task1);
console.log(taskList);
