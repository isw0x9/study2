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
todoList.forEach(function(el){
    const wrap = document.createElement('div')
    wrap.classList = 'wrap'
    const name = document.createElement('div')
    name.classList = 'name'
    name.innerText = el.name
    const description = document.createElement('div')
    description.classList = 'description'
    description.innerText = el.description
    wrap.append(name)
    wrap.append(description)
    todosListEl.append(wrap)
})


// todoList.forEach(function(el){
//     const todo = document.createElement('div')
//     todo.innerHTML = `<div class="name">${el.name}</div><div class="description">${el.description}</div>`
//     todosListEl.append(todo)
// })

function save() {
    console.log("save")
    const nameEl = document.getElementById("name")
    const descriptionEl = document.getElementById("description")
    console.log(nameEl)
    if (nameEl.value == '' || descriptionEl.value == '')  {
        alert("Пустеы значения")
        return
    }
    const newTodo = {
        name: nameEl.value,
        description: descriptionEl.value
    }
    todoList.push(newTodo)
    console.log(todoList)
}