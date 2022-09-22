const categoryOrganiser = {
    personal: [],
    work: [],
    social: [],
}

// factory for 'to-do' object with date, action to be done, status(complete)? priority

const toDoFactory = (task, priority, dueDate, category) => {
    const getCurrentDate = Intl.DateTimeFormat("en", {
        dateStyle: 'short',                                 //format date to have dd/mm/yy
    });
    const date = getCurrentDate.format(Date.now()); 
    const organiseCategory = () => {
        if (category == 'personal') {
            categoryOrganiser.personal.unshift({task, priority, dueDate, category});
        }
        else if (category == 'work') {
            categoryOrganiser.work.unshift({task, priority, dueDate, category});
        }
        else if (category == 'social') {
            categoryOrganiser.social.unshift({task, priority, dueDate, category});
        }
    }
    organiseCategory();
    return {
        task,
        dueDate,
        priority,
        date,
        category
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

function newToDo (task, priority, dueDate, category) {
    const newTask = toDoFactory(task, priority, dueDate, category);
    addToDo(newTask);
    console.log(categoryOrganiser);
}

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formToDo = new FormData(form);
    let task = formToDo.get('task');
    let due = formToDo.get('due-date');
    let priority = formToDo.get('priority');
    let category = formToDo.get('category');
    newToDo(task, priority, due, category);
});




// Local storage to remember a user's tasks