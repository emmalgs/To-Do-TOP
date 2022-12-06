import { myProjects } from "./addproject"
import { clearToDoField } from "./todo"


export function accessProjects() {
 myProjects.forEach(i => {
    document.getElementById(myProjects[i]['title']).addEventListener('click', () => 
    console.log(myProjects[i]['list']))
 })
}


