import {Employee} from "./classes.js";
import {BackendDeveloper, Company, FrontendDeveloper, Manager, Project} from "./hard_classes.js";


let abobaInt = new Company('Aboba International')
let andrey = new BackendDeveloper('Andrey')
let lena = new FrontendDeveloper('Lena')
let biba = new Manager('Biba')
let project1 = new Project("Do stuff", 'L1')
let project2 = new Project("Do another stuff", 'L2')

abobaInt.addNewCompanyMember(andrey)
abobaInt.addNewCompanyMember(lena)
abobaInt.addNewCompanyMember(biba)


abobaInt.addProject(project1)
project1.addNewProjectMember(biba)
project1.addNewProjectMember(lena)

console.log("--------ADDED 1 PROJECT---------------")
console.log(abobaInt)
console.log("--------PROJECT TEAM---------------")
console.log(project1.team)
console.log("--------PROJECT DEVELOPERS---------------")
console.log(project1.team.Developers)


abobaInt.completeProject(project1)
console.log("-----COMPLETED PROJECT1. +1 TO EVERY EMPLOYEE OF THIS PROJECT")
console.log(abobaInt.staff)

abobaInt.addProject(project2)
project2.addNewProjectMember(biba)
console.log("---------ANDREY HAS L1 GRADE--------")
project2.addNewProjectMember(andrey)
andrey.upGrade()
project2.addNewProjectMember(andrey)

console.log("------UPGRADED ANDREY IN PROJECT-------")
console.log(project2.team.Developers)
abobaInt.completeProject(project2)
console.log("-------COMPLETED PROJECT 2. +1 TO EVERY EMPLOYEE OF THIS PROJECT------")
console.log(abobaInt.staff)
