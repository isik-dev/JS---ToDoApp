// const todos = [{
//     text: 'Buy grocery',
//     completed: true
// }, {
//     text: 'Do homework',
//     completed: false
// }, {
//     text: 'Clean the room',
//     completed: true
// }, {
//     text: 'Workout',
//     completed: false
// }, {
//     text: 'Read KGB',
//     completed: true
// }]

// 1. Setup a div contain for todos
// 2. Setup filters (searchText) and wire up new filter input to change it
// 3. Create a renderTodos function to render and rerender the latest filtered data

// const filters = {
//     searchText: ''
// }

// const renderTodos = function (todos, filters) {
//     const filteredTodos = todos.filter(function (item) {
//         return item.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     })

//     // Creates a function that returns uncompleted array of items
//     const incompleteElements = filteredTodos.filter(function (item, index) {
//         return !item.completed
//     })

//     document.querySelector('#todos').innerHTML = ''

//     // Renders a statement on the html website
//     const element = document.createElement('h2')
//     element.textContent = `You have ${incompleteElements.length} todos left`
//     document.querySelector('#todos').appendChild(element)

//     // Loops through each item in the array and renders it in html website
//     filteredTodos.forEach(function (item, index) {
//         const newElement = document.createElement('p')
//         newElement.textContent = item.text
//         document.querySelector('#todos').appendChild(newElement)
//     })
// }


// renderTodos(todos, filters)


// // Listens to the add-todo button click and prints a message in the console
// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('the button was clicked')
// })

// // Listens to the text input in the input box and prints what's inputted.
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

// // Listen to the text input in the input box and prints filtered elements
// document.querySelector('#filter-todos').addEventListener('input', function (e) {
//     filters.searchText = e.target.value
//     renderTodos(todos, filters)
// })

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
    searchText: '',
    hideCompleted: false


}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (item, index) {
        const searchTextMatch = item.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompleteMatch = !filters.hideCompleted || !item.completed

        return searchTextMatch && hideCompleteMatch
    })
    
    const incompleteTodos = filteredTodos.filter(function (item, index) {
        return !item.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const p = document.createElement('h2')
    p.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(p)

    filteredTodos.forEach(function (item, index) {
        const element = document.createElement('p')
        element.textContent = item.text
        document.querySelector('#todos').appendChild(element)
    })

    
    
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//Done 1. Create a form with a single input for todo text
//Done 2. Setup a submit handler and cancel the default action
// 3. Add a new item to the todos array with that text data (completed value of false)
//Done 4. Rerender the application
//Done 5. Clear the input field value

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''

})


//Done 1. Create a checkbox and setup event listener -> "Hide completed"
//Done 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items

document.querySelector('#hide-checkbox').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})