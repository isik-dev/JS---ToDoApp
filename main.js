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
// 2. Setup filters (searchText) and wire up new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (item) {
        return item.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Creates a function that returns uncompleted array of items
    const incompleteElements = filteredTodos.filter(function (item, index) {
        return !item.completed
    })

    document.querySelector('#todos').innerHTML = ''

    // Renders a statement on the html website
    const element = document.createElement('h2')
    element.textContent = `You have ${incompleteElements.length} todos left`
    document.querySelector('#todos').appendChild(element)

    // Loops through each item in the array and renders it in html website
    filteredTodos.forEach(function (item, index) {
        const newElement = document.createElement('p')
        newElement.textContent = item.text
        document.querySelector('#todos').appendChild(newElement)
    })
}


renderTodos(todos, filters)


// Listens to the add-todo button click and prints a message in the console
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('the button was clicked')
})

// Listens to the text input in the input box and prints what's inputted.
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})