const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(todos, filters)


// Listen for add todo button click
document.querySelector('#add-form').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.addTodo.value,
        completed: filters.hideCompleted
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''
})

//Listen for search todo text change
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Listen for the Checkbox
document.querySelector('#filter-todos').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})