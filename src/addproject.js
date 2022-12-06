import { todoList } from "./todolist";
import { accessProjects } from "./projects";

export const myProjects = [];
    let newProject;

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

        newProject = new Project(projectValue, todoList)
        myProjects.push(newProject)
        console.log(myProjects)
    })

    accessProjects()
}




export function addProject() {
    document.querySelector('.add-project-btn').addEventListener('click', addProjectInput)
}