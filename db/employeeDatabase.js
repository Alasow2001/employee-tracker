const dataBase = require('./Database');

const table = require('console.table');

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

exports.getDepartment = function() {
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

exports.getRole = function() {
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

exports.getEmployee = function() {
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

exports.getDepartmentIds = function() {

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

exports.getRoleIds = function() {

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

exports.getEmployeeIds = function() {

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