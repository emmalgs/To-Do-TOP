import { addProject } from "./addproject";
import { addItemClick } from "./todo";


export function pageload() {
    const content = document.querySelector('#content');

    const header = document.createElement('div')
    header.classList.add('header')
    content.append(header)

    const headerText = document.createElement('div')
    headerText.classList.add('header-text')
    headerText.textContent = 'To Do'
    header.append(headerText)

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    content.append(sidebar)

    const projects = document.createElement('div')
    projects.classList.add('projects')
    projects.textContent = 'PROJECTS'
    sidebar.append(projects)

    const addProjectBtn = document.createElement('button')
    addProjectBtn.classList.add('add-project-btn')
    addProjectBtn.innerText = '+'
    projects.append(addProjectBtn)

    const main = document.createElement('div')
    main.classList.add('main')
    content.append(main)

    const addTodoBtn = document.createElement('div')
    addTodoBtn.classList.add('add-todo-btn')
    addTodoBtn.textContent = '+ New Item'
    main.append(addTodoBtn)

    addProject()
    addItemClick()
}