/*
У экземпляра класса должны присутствовать св-ва:
-name string.
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4.
-hardSkills string[].
-company string.
Так же должны иметься три метода:
-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться.
-upGrade() - сотрудник может повысить квалификацию.
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/
export class Employee {
    constructor(name) {
        this.name = name
        this.grade = 'L1'
        this.hardSkills = []
        this.company = {}
    }
    changeCompany(newCompanyName) {
        newCompanyName ? this.company = newCompanyName : this.company = {}
        return this.company
    }
    upGrade() {
        switch (this.grade) {
            case 'L1':
                this.grade = 'L2'
                break
            case 'L2':
                this.grade = 'L3'
                break
            case 'L3':
                this.grade = 'L4'
                break
            default:
                throw new Error('The grade is already the highest')
        }
        return this.grade
    }

    addSkill(newSkillName) {
        return this.hardSkills.push(newSkillName)
    }
}
