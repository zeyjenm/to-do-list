// factory for 'to-do' object with date, action to be done, status(complete)? priority

const newToDo = (task, priority, dueDate) => {
    const getCurrentDate = Intl.DateTimeFormat("en", {
        dateStyle: 'short',
    });
    const date = getCurrentDate.format(Date.now());

    

    return {
        date,
        task,
        priority,
        dueDate,
    }
}

newToDo();
// Categories for separate lists of to-dos