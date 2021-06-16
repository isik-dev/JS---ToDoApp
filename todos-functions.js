// Fetch existing todos from localStorage
// getSavedTodos
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
// saveTodos
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
// renderTodos
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
    document.querySelector('#todos').appendChild(generateSummarDOM(incompleteTodos))

    filteredTodos.forEach(function (item, index) {
        document.querySelector('#todos').appendChild(generateTodoDOM(item))
    })   
}

// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDOM = function (item) {
    const element = document.createElement('p')

        if (item.text.length > 0) {
            element.textContent = item.text
        } else {
            element.textContent = 'Unnamed todos'
        }
        
        return element

}

// Get the DOM elements for list summary
// generateSummarDOM
const generateSummarDOM = function (incompleteTodos) {
    const p = document.createElement('h2')
    p.textContent = `You have ${incompleteTodos.length} todos left`
    return p
}