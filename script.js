// factory for 'to-do' object with date, action to be done, status(complete)? priority

const toDoFactory = (task, priority, dueDate) => {
    const getCurrentDate = Intl.DateTimeFormat("en", {
        dateStyle: 'short',                                 //format date to have dd/mm/yy
    });
    const date = getCurrentDate.format(Date.now()); 

    

    return {
        task,
        dueDate,
        priority,
        date
    }
}


// Function to add to-dos to the DOM
const formBtn = document.querySelector('#form-button');
const form = document.querySelector('form');
const table = document.querySelector('table');

function addToDo (input) {  //Creates a new row containing the to-do information
    const newTableRow = document.createElement('tr');
    const toDoProperties = ['task', 'dueDate', 'priority', 'date'];       
        for (let i = 0; i < 4; i++) {                           
            const newTbCell = document.createElement('td');
            newTbCell.textContent += input[toDoProperties[i]];
            newTableRow.appendChild(newTbCell);
        }
    table.appendChild(newTableRow);
}

function newToDo (task, priority, dueDate) {
    const newTask = toDoFactory(task, priority, dueDate);
    addToDo(newTask);

}

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formToDo = new FormData(form);
    let task = formToDo.get('task');
    let due = formToDo.get('due-date');
    let priority = formToDo.get('priority');
    newToDo(task, priority, due);
});

// Categories for separate lists of to-dos


// Local storage to remember a user's tasks