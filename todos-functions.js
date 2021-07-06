// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    return todosJSON !== null ?  JSON.parse(todosJSON) : []

    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
}

// Save todos to localStorage 
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(function (todo) {
        const searchFilter = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const checkboxFilter = !todo.completed || !filters.hideCompleted
    
        return searchFilter && checkboxFilter 
    })
    
    

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    
    
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })

}

// Remove todo by its UUID
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo by its UUID
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {

    const todoEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const textEL = document.createElement('span')
    const buttonEl = document.createElement('button')

    // Setup todo checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    todoEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    

    // Setup the todo text
    textEL.textContent = todo.text
    todoEl.appendChild(textEL)

    // Setup the remove button
    buttonEl.textContent = 'Remove'
    todoEl.appendChild(buttonEl)
    buttonEl.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    

    return todoEl
}


// Get the DOM elements for list summary
// generateSummaryDOM
const generateSummaryDOM = (incompleteTodos)=> {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

