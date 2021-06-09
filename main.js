const todos = [{
    text: 'Buy grocery',
    completed: true
}, {
    text: 'Do homework',
    completed: false
}, {
    text: 'Clean the room',
    completed: true
}, {
    text: 'Workout',
    completed: false
}, {
    text: 'Read KGB',
    completed: true
}]

// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the lates filtered data 


// Starts
const incompleteTasks = todos.filter(function (item, index) {
    return !item.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTasks.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (item) {
    const p = document.createElement('p')
    p.textContent = item.text
    document.querySelector('body').appendChild(p)
})
// Ends

// Listen for new tㄴodo creation
document.querySelector('#create-todo').addEventListener('click', function(e) {
    console.log('I added a new button')
})

// Listen for todo text change
document.querySelector('#filter-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})

