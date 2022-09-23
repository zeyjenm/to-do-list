let storageObj = [];

// factory for 'to-do' object with date, action to be done, status(complete)? priority

const toDoFactory = (task, dueDate, priority, category) => {
    const getCurrentDate = Intl.DateTimeFormat("en", {
        dateStyle: 'short',                                 //format date to have dd/mm/yy
    });
    const date = getCurrentDate.format(Date.now());
    storageObj.push({task, dueDate, priority, date, category});
    let JSONObj = JSON.stringify(storageObj);
    localStorage.setItem('key', JSONObj);
    console.log(storageObj);
    return {
        task,
        dueDate,
        priority,
        date,
        JSONObj,
        category
    }
}


// Function to add to-dos to the DOM
const formBtn = document.querySelector('#form-button');
const form = document.querySelector('form');
const table = document.querySelector('table');
const tableRows = document.querySelectorAll('tr');

const personalBtn = document.querySelector('#personal-btn');
const workBtn = document.querySelector('#work-btn');
const socialBtn = document.querySelector('#social-btn'); 

function addToDo (input) {  //Creates a new row containing the to-do information
    const newTableRow = document.createElement('tr');
    const toDoProperties = ['task', 'dueDate', 'priority', 'category', 'date'];       
        for (let i = 0; i < 4; i++) {                           
            const newTbCell = document.createElement('td');
            newTbCell.textContent += input[toDoProperties[i]];
            newTableRow.setAttribute('value', input[toDoProperties[3]]);
            newTableRow.appendChild(newTbCell);
        }    
    table.appendChild(newTableRow);
// Category viewer 
    personalBtn.addEventListener('click', () => {
        if (newTableRow.getAttribute('value') != 'personal') {
            newTableRow.style.display = 'none';
        }
        else if (newTableRow.getAttribute('value') == 'personal') {
            const newTbCell = document.createElement('td');
            newTbCell.textContent += input[toDoProperties[i]];
        }
    });
    workBtn.addEventListener('click', () => {
        if (newTableRow.getAttribute('value') != 'work') {
            newTableRow.style.display = 'none';
        }
        else if (newTableRow.getAttribute('value') == 'work') {
            newTableRow.style.display = 'contents';
        }
    });
    socialBtn.addEventListener('click', () => {
        if (newTableRow.getAttribute('value') != 'social') {
            newTableRow.style.display = 'none';
        }
        else if (newTableRow.getAttribute('value') == 'social') {
            newTableRow.style.display = 'contents';
        }
    });
}

function newToDo (task, dueDate, priority, category) {
    const newTask = toDoFactory(task, dueDate, priority, category);
    addToDo(newTask);
}

formBtn.addEventListener('click', () => {
    const formToDo = new FormData(form);
    let task = formToDo.get('task');
    let due = formToDo.get('due-date');
    let priority = formToDo.get('priority');
    let category = formToDo.get('category');
    newToDo(task, due, priority, category);
});


const getStorage = () => {
    const parsed = JSON.parse(localStorage.getItem('key'));
    console.log(parsed);
    for (let i = 0; i <= storageObj.length; i++) {
    newToDo(parsed[i].task, parsed[i].dueDate, parsed[i].priority, parsed[i].category, parsed[i].date);
    }
};
const refresh = document.querySelector('#refresh');

refresh.addEventListener('click', () => {
    getStorage();
})

console.log(localStorage.length);









// Local storage to remember a user's tasks