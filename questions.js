const mainQuestions = [
    {
        type: 'list',
        name:'option',
        message: 'What would you like to do?',
        choices: [
            {
                name: 'Add a department',
                value: 'add-department'
            },

            {
                name: 'Add a role',
                value: 'add-role'
            },

            {
                name: 'Add an employee',
                value: 'add-employee'
            },

            {
                name: 'Update an employee',
                value: 'employee-update'
            },

            {
                name: 'View all roles',
                value: 'view-roles'
            },

            {
                name: 'View all department',
                value: 'view-department'
            },

            {
                name: 'View all employees',
                value: 'view-employee'
            }

    ]
    }
]

const addDepartment = [
    {
        type: 'input',
        name: 'department_name',
        message: 'Enter a new department name:',
        choices: []
    }
]

const addRole = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a new role: '
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter the salary for this role: '
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'What is the department for this role',
        choices: []
    }
]

const addEmployee = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the employees first name?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the employees last name?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the employees role?',
        choices: []
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is the employees manager?',
        choices: []
    },
]

const updateEmployee = [
    {
        type: 'list',
        name: 'employee_id',
        message: 'Select an employee to update their information',
        choices: []
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Select a new role for the employee',
        choices: []
    }
]

module.exports = {mainQuestions, addDepartment, addEmployee, addRole, updateEmployee}