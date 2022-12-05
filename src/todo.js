import { todoList } from "./todolist"

export function addItemClick() {
    document.querySelector('.add-todo-btn').addEventListener('click', addItemInput)
}

function addItemInput() {
    const main = document.querySelector('.main')
    const addBtnContainer = document.createElement('div')

    addBtnContainer.classList.add('add-btn-container')
    main.appendChild(addBtnContainer)
    
    const addNewItem = document.createElement('input')
    addNewItem.classList.add('add-new-item')
    addNewItem.type = 'text'
    addBtnContainer.appendChild(addNewItem)

    const addBtn = document.createElement('button')
    addBtn.classList.add('add-btn')
    addBtn.innerText = '+ Item'
    addBtnContainer.append(addBtn) 
    
    addBtn.addEventListener('click', () => {
        const todoValue = document.querySelector('.add-new-item').value
        todoList.push(todoValue)
        newToDo()

        main.removeChild(addBtnContainer)
    })


    function newToDo() {
        const main = document.querySelector('.main');
        const todoItem = document.querySelectorAll('.add-item');
        todoItem.forEach(item => main.removeChild(item));
    
        for (let i=0; i < todoList.length; i++){
            createList(todoList[i]) }
    }
   
    function createList(info) {
        const todo = document.createElement('div')
        todo.classList.add('add-item')
        todo.textContent = `${info}`
        main.append(todo)

        const checked = document.createElement('input')
        checked.type = 'checkbox'
        todo.append(checked)

        const remove = document.createElement('button')
        remove.classList.add('rmv-btn')
        remove.textContent = 'X'
        todo.append(remove)

        remove.addEventListener('click', () => {
            todoList.splice(todoList.indexOf(info), 1);
            newToDo();
            });
    }
}

export function clearToDoField() {
    const main = document.querySelector('.main')
    while (main.children.length > 1) {
        main.children[1].remove
    }
}

