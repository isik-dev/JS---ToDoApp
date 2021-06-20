const todos = [{
    text: 'order cat food',
    completed: false
}, {
    text: 'clean kitchen',
    completed: true
}, {
    text: 'buy food',
    completed: true

}, {text: 'do work',
    completed: false
}, {
    text: 'exercise',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}


const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchFilter = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const checkboxFilter = !todo.completed || !filters.hideCompleted
        return searchFilter && checkboxFilter 
    })
    
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })

}

renderTodos(todos, filters)


// Listen for add todo button click
document.querySelector('#add-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.addTodo.value,
        completed: filters.completed
    })
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