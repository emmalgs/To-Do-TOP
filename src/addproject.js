import { accessProjects } from "./projects";
import { todoList } from "./todolist";

export let myProjects = {};
// if we make the myProjects an array, with the constructor combining the myProjects array index with the list index...? to make an object that stores all that info?...
//maybe not...because we want to be able to click the project and pull up the to do list associated with it and edit that list. So the best way to do that is to be able to create 
//different objects stored in one big object....
function Project(title, list) {
    this.title = title
    this.list = list
    }


export function addProjectInput() {
    const projects = document.querySelector('.projects')
    const addNewProject = document.createElement('input')
    addNewProject.classList.add('add-new-project')
    addNewProject.type = 'text'
    projects.append(addNewProject)

    const addBtn = document.createElement('button')
    addBtn.classList.add('add-btn')
    addBtn.innerText = '+ Project'
    projects.append(addBtn) 
    
    addBtn.addEventListener('click', () => {
        const project = document.createElement('div')
        const projectValue = document.querySelector('.add-new-project').value
        project.setAttribute('id', projectValue)
        project.textContent = `${projectValue}`
        projects.append(project)

        projects.removeChild(addNewProject)
        projects.removeChild(addBtn)
        myProjects = new Project(projectValue, todoList)
        console.log(myProjects)

    })
    
}

export function addProject() {
    document.querySelector('.add-project-btn').addEventListener('click', addProjectInput)
}