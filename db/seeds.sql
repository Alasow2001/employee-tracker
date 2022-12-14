INSERT INTO department (id, name) VALUES (1, 'Engineering');
INSERT INTO department (id, name) VALUES (2, 'IT');
INSERT INTO department (id, name) VALUES (3, 'Legal');
INSERT INTO department (id, name) VALUES (4, 'Marketing, Sales and Finance');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'System Engineer', 75000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Electrician', 90000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Sales Assistant', 50000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Lawyer', 75000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Solicitor', 50000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Frontend Developer', 65000, 2);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'Lewis', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Laura', 'Stevenson', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Adam', 'Ali', 2, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Samuel', 'Griffin', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'David', 'Tennant', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'John', 'Lewis', 3, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Joanna', 'Daniels', 3, NULL);