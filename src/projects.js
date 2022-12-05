import { myProjects } from "./addproject"
import { clearToDoField } from "./todo"

export function accessProjects() {
    for (const keys in myProjects) {
        console.log(`${keys}: ${myProject[keys]}`)
    }
}


