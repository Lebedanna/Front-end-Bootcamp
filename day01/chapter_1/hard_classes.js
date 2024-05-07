import { Employee } from "./classes.js";

export class Company {
    constructor(companyName) {
        this.companyName = companyName
        this.currentProjects  = []
        this.completedProjects = []
        this.staff = {
            Developers: [],
            Managers: []
        }
    }
    addNewCompanyMember(employee) {
        if (employee instanceof Manager) {
            this.staff.Managers.push(employee)
            employee.changeCompany(this.companyName)
        } else if (employee instanceof FrontendDeveloper || employee instanceof BackendDeveloper) {
            this.staff.Developers.push(employee)
            employee.changeCompany(this.companyName)
        } else {
            console.log('this is not a manager nor developer')
        }
    }
    addProject(project) {
        if (project instanceof Project) {
            return this.currentProjects.push(project)
        } else {
            console.log("This project is not valid")
        }

    }
    getMembersQuantity() {
        return this.staff.Developers.length + this.staff.Managers.length
    }
    completeProject(project) {
        if (this.currentProjects.includes(project)) {
            let idx = this.currentProjects.indexOf(project)
            this.currentProjects.splice(idx, 1)
            this.completedProjects.push(project)
            project.team.Manager.projectQuantity++
            project.team.Developers.BackendDeveloper.forEach(backendDeveloper => backendDeveloper.projectQuantity++);
            project.team.Developers.FrontendDeveloper.forEach(frontendDeveloper => frontendDeveloper.projectQuantity++);
            return this.completedProjects;
        } else {
            console.log("No such project in current")
        }

    }
}

export class Project {
    constructor(projectName, minQualification) {
        this.projectName = projectName
        this.minQualification = minQualification
        this.team = {
            Manager: [],
            Developers: {
                BackendDeveloper: [],
                FrontendDeveloper: []
            }
        }
        this.addedMembers = {}
    }

    
    addNewProjectMember(Developer) {
        if (!this.addedMembers[Developer.name]) {
            if (Developer instanceof Manager) {
                this.team.Manager = Developer
                this.addedMembers[Developer.name] = true
            } else {
                if (Manager.checkMember(this.minQualification, Developer)) {
                    if (Developer.developerSide === 'frontend') {
                        this.team.Developers.FrontendDeveloper.push(Developer)
                        this.addedMembers[Developer.name] = true
                    }
                    if (Developer.developerSide === 'backend') {
                        this.team.Developers.BackendDeveloper.push(Developer)
                        this.addedMembers[Developer.name] = true
                    }
                } else {
                    console.log(`This candidate (${Developer.name}) can not be a developer for this project`)
                }
            }
        } else {
            console.log("This candidate is already working on projects")
        }
            return this.team
    }
    
    
}

export class Manager extends Employee {
    constructor(name) {
        super();
        this.name = name
        this.projectQuantity = 0
    }
    
    static checkMember(minQualification, member) {
        if (member instanceof Employee) {
            return member.grade.slice(-1) >= minQualification.slice(-1)
        } else {
            return false
        }
    }

}

export class FrontendDeveloper extends Employee {
    constructor(name) {
        super();
        this.name = name
        this.stack = 0
        this.developerSide = 'frontend'
        this.projectQuantity = 0
    }
    expandStack(newTech) {
        this.stack(newTech)
    }
}

export class BackendDeveloper extends Employee {
    constructor(name) {
        super();
        this.name = name
        this.stack = []
        this.developerSide = 'backend'
        this.projectQuantity = 0
    }
    expandStack(newTech) {
        this.stack(newTech)
    }
}



