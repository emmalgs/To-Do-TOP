import { myProjects } from "./addproject"
import { clearToDoField } from "./todo"

const main = document.querySelector('.main')

export function accessProjects() {
 for (let i = 0; i < myProjects.length; i++) {
   document.getElementById(myProjects[i]['title']).addEventListener('click', () => {
      const projectTitle = document.createElement('div')
      projectTitle.textContent = `${myProjects[i]['title']}`
      main.append(projectTitle)
   })
 }
}


