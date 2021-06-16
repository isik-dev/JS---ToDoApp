// 1. Add event handler to checkbox
// 2. Modify the correct objects completed property-> toggleTodo
// 3. Save and rerender

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

// Create removeTODO function
const removeTODO = function (id) {
    const itemIndex = todos.findIndex(function (item) {
        return item.id === id
    })
    if (itemIndex > -1) {
        return todos.splice(itemIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const item = todos.find(function (item) {
        return item.id === id
    })

    if (item !== undefined) {
        item.completed = !item.completed
    }
}


// Get the DOM elements for an individual note
// generateTodoDOM
const generateTodoDOM = function (item) {
    const element = document.createElement('div')
    const checkEl = document.createElement('input')
    const textEl = document.createElement('span')
    const removeEl = document.createElement('button')

    removeEl.textContent = 'delete'

    //Setup todo checkbox
    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = item.completed
    element.appendChild(checkEl)
    checkEl.addEventListener('change', function () {
        toggleTodo(item.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })


        //Setup the todo text
        if (item.text.length > 0) {
            textEl.textContent = item.text
        } else {
            textEl.textContent = 'Unnamed todos'
        }
        element.appendChild(textEl)

        // Setup the remove button
        element.appendChild(removeEl)
        removeEl.addEventListener('click', function (e) {
            removeTODO(item.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })


        return element

}

// Get the DOM elements for list summary
// generateSummarDOM
const generateSummarDOM = function (incompleteTodos) {
    const p = document.createElement('h2')
    p.textContent = `You have ${incompleteTodos.length} todos left`
    return p
}