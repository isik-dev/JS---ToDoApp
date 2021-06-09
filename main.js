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

const incompleteTasks = todos.filter(function (item, index) {
    return !item.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTasks.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (item) {
    const p = document.createElement('p')
    p.textContent = item.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#create-todo').addEventListener('click', function(e) {
    console.log('I added a new button')
})

document.querySelector('#filter-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})
