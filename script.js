console.log(1)
const todoList = [
    {
        name: 'name1',
        description: 'description1'

    },
    {
        name: 'name2',
        description: 'description2'

    },
    {
        name: 'name3',
        description: 'description3'

    },
    {
        name: 'name4',
        description: 'description4'

    },
    {
        name: 'name5',
        description: 'description5'

    }
]
const todosListEl = document.getElementById('todoListId')
// divEl.innerText = todoList
// todoList.forEach(function(el){
//     const wrap = document.createElement('div')
//     const name = document.createElement('div')
//     name.innerText = el.name
//     const description = document.createElement('div')
//     description.innerText = el.description
//     wrap.append(name)
//     wrap.append(description)
//     todosListEl.append(wrap)
// })


todoList.forEach(function(el){
    const todo = document.createElement('div')
    todo.innerHTML = `<div>${el.name}</div><div>${el.description}</div>`
    todosListEl.append(todo)
})
