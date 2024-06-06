#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    addDoctor(obj) {
        this.student.push(obj);
    }
}
const persons = new Person();
const programstart = async (persons) => {
    do {
        console.log("Hello!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "How Can i Help YOU?",
            choices: ["staff", "student", "Exit"]
        });
        if (ans.select == "staff") {
            console.log("You approach the staff room..");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name"
            });
            const student = persons.student.find(val => val.name = ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addDoctor(name);
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New student Added");
                console.log("Current student list");
                console.log(persons.student);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Exicting list");
                console.log(persons.student);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting the Program");
            process.exit();
        }
    } while (true);
};
programstart(persons);
console.log("The End");
