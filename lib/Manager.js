// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Intern = require("./Intern")
class Manager extends Intern{
    constructor(name, id, email, officeNumber){
        super(name, id, email, officeNumber)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return"Manager"
    }
}

module.exports = Manager;