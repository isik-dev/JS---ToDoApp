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
    searchText: ''
}


const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add todo button was clicked')
})

// Listen for todo text change
document.querySelector('#todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

//Listen for search todo text change
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})