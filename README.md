# employee-tracker

## Objective

This task was to create an application that would generate an employee tracker, showing all of the different roles. departments, employees related to the former two as well as who their respective manager was, given they had one. The following bellow was the user story for this assignment:

- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

## Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation

You will need the following applications installed before using this application: 

- VS CODE
- MySQL (Have the mysql2 npm package installed so you can use mysql in the vs code terminal)
- Node.js and NPM packages (console.table, inquirer version 8.2.4)

## Usage

1. Download the npm packages labelled above by doing the following
    - npm i console.table
    - npm i inquirer@8.2.4
    - npm i mysql2
2. Log into MySQL through this command: mysql -u root -p. Enter your password and then input the following commands:
    - source db/schema.sql
    - source db/seeds.sql
3. Finally, run this command: npm run start to have the application running

## Walkthrough video

Link to walkthrough video: https://drive.google.com/file/d/1NXZ5rj7HIjPNDUb_tB8xqG-H_ZH27GZU/view 

## License
N/A