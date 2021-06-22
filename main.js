const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(todos, filters)


// Listen for add todo button click
document.querySelector('#add-form').addEventListener('submit', function (e) {
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
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Listen for the Checkbox
document.querySelector('#filter-todos').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})