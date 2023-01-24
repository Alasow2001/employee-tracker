const dataBase = require('./Database');

const table = require('console.table');

// This will add a value to the department table into the database
exports.addDepartment = function(name) {
    return new Promise((resolve, reject) => {
        dataBase.query(
            "INSERT INTO department (name) VALUES (?)",
            [name],
            (err, result) => {
                if(err){
                    console.log(err);
                }
                resolve("Created department");
            }
        )
    })
}

// This will add a role to the database without logging into MySQL
exports.addRole = function(title, salary, departmentId) {
    return new Promise((resolve, reject) => {
        dataBase.query(
            "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)",
            [title, salary, departmentId],
            (err, result) => {
                if(err){
                    console.log(err);
                }
                resolve("Created role")
            }
        )
    })
}

// This will add an employee to the database without logging into MySQL
exports.addEmployee = function(firstName, lastName, roleId, managerId) {
    return new Promise((resolve, reject) => {
        dataBase.query(
            "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [firstName, lastName, roleId, managerId != "null" ? managerId : undefined],
            (err, result) => {
                if(err){
                    console.log(err);
                }
                resolve("Created employee")
            }
        )
    })
    
}

// This will update the role of the already existing employee in the database
exports.updateRoleForEmployee = function(employeeId, role_Id) {
    return new Promise((resolve, reject) => {
        dataBase.query(
            "UPDATE employee SET role_id=? where id=?",
            [employeeId, role_Id],
            (err, result) => {
                if(err){
                    console.log(err);
                }
                resolve("Updated the employees role")
            }
        )
    })
}

// This will get all of the department values from the database thats already been seeded
exports.getDepartment = function() {
    // This promise will generate a MySQL query to display all of the values of the department table
    return new Promise((resolve, reject) => {
        dataBase.query(
            "SELECT * FROM department", (err, result) => {
                if(err){
                    console.log(err)
                }
                console.table(result)
                resolve(result)
            }
        )
    })
}

// This will get all of the role values from the database
exports.getRole = function() {
    // This promise will generate a MySQL query to display all of the values of the role table
    return new Promise((resolve, reject) => {
        dataBase.query(
            "SELECT * FROM role", (err, result) => {
                if(err){
                    console.log(err)
                }
                console.table(result)
                resolve(result)
            }
        )
    })
}

// This will get all of the employee values from the seed data
exports.getEmployee = function() {
    // This promise will generate a MySQL query to display all of the values of the employee table
    return new Promise((resolve, reject) => {
        dataBase.query(
            "SELECT * FROM employee", (err, result) => {
                if(err){
                    console.log(err)
                }
                console.table(result)
                resolve(result)
            }
        )
    })
    
}

// Display all of the department ids in a list
exports.getDepartmentIds = function() {
    // This promise will generate a MySQL query to display all of the department ids
    return new Promise((resolve, reject) => {
        dataBase.query(
            "SELECT id FROM department", (err, result) => {
                if(err){
                    console.log(err)
                }
                data = result.map((i) => i.id + "")
                resolve(data)
            }
        )
    })
    
    
}

// Display all of the role ids in a list
exports.getRoleIds = function() {
    // This promise will generate a MySQL query to display all of the role ids
    return new Promise((resolve, reject) => {
        dataBase.query(
            "SELECT id FROM role", (err, result) => {
                if(err){
                    console.log(err)
                }
                data = result.map((i) => i.id + "")
                resolve(data)
            }
        )
    })
    
}

// Display all of the employee ids in a list
exports.getEmployeeIds = function() {
    // This promise will generate a MySQL query to display all of the employee ids
    return new Promise((resolve, reject) => {
        dataBase.query(
            "SELECT id FROM employee", (err, result) => {
                if(err){
                    console.log(err)
                }
                data = result.map((i) => i.id + "")
                data.push("null")
                resolve(data)
            }
        )
    })
    
}