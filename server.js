const inquirer = require("inquirer");

const questions = require("./questions");

const {addDepartment, addEmployee, addRole, 
    getDepartment, getEmployee, getRole, 
    getDepartmentIds, getEmployeeIds, getRoleIds, updateRoleForEmployee} = require("./db/employeeDatabase");

function init(){
    inquirer.prompt(questions.mainQuestions).then((answers) => {
        switch(answers.option){
            case 'add-department':
                createDepartment()
                break;
            case 'add-employee':
                createEmployee()
                break;
            case 'add-role':
                createRole()
                break;
            case 'employee-update':
                updateEmployee()
                break;
            
            case 'view-department':
                departmentList()
                break;

            case 'view-roles':
                roleList()
                break;
            
            case 'view-employee':
                employeeList()
                break;

            default:
                break 

        }
    })
}

init()

function departmentList(){
    getDepartment().then((response) => {
        init();
    })
}

function employeeList(){
    getEmployee().then((response) => {
        init();
    })
}

function roleList(){
    getRole().then((response) => {
        init();
    })
}

function createDepartment(){
    inquirer.prompt(questions.addDepartment).then((answers) => {
        addDepartment(answers.department_name).then((response) => {
            init()
        })
    })
}

async function createEmployee(){
    const employeeQs = questions.addEmployee;
    employeeQs[2].choices = await getRoleIds();
    employeeQs[3].choices = await getEmployeeIds();
    inquirer.prompt(employeeQs).then((answers) => {
        addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id).then((response) => {
            init();
        })
    })
}

async function createRole(){
    const roleQs = questions.addRole
    roleQs[2].choices = await getDepartmentIds();
    inquirer.prompt(roleQs).then((answers) => {
        addRole(answers.title, answers.salary, answers.department_id).then((response) => {
            init();
        })
    })
}

async function updateEmployee(){
    let updateEmployeeRoles = questions.updateEmployee;
    updateEmployeeRoles[0].choices = await getEmployeeIds();
    updateEmployeeRoles[1].choices = await getRoleIds();
    inquirer.prompt(updateEmployeeRoles).then((answers) => {
        updateRoleForEmployee(answers.employee_id, answers.role_id).then((response) => {
            init();
        })
    })
}
