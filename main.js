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

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTasks = filteredTodos.filter(function (item, index) {
        return !item.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTasks.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (item) {
        const p = document.createElement('p')
        p.textContent = item.text
        document.querySelector('#todos').appendChild(p)
    })

}

renderTodos(todos, filters)

// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it
// 3. Create a renderTodos function to render and rerender the lates filtered data 


// Starts
// const incompleteTasks = todos.filter(function (item, index) {
//     return !item.completed
// })

// const summary = document.createElement('h2')
// summary.textContent = `You have ${incompleteTasks.length} todos left`
// document.querySelector('body').appendChild(summary)

// todos.forEach(function (item) {
//     const p = document.createElement('p')
//     p.textContent = item.text
//     document.querySelector('body').appendChild(p)
// })
// Ends

// Listen for new todo creation
document.querySelector('#create-todo').addEventListener('click', function(e) {
    console.log('I added a new button')
})

// Listen for todo text change
document.querySelector('#filter-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})