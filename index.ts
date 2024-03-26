#! /usr/bin/env node

import inquirer from "inquirer";

//Printing Welcome message:
console.log("\n\tWellcome to \`gohar_ali\` CLI Simple Calculator\n");

const answers: {
    numberOne : number,
    numberTwo : number,
    operator : string,
}= await  inquirer.prompt([
    {
        type: "number",
        name : "numberOne",
        message: "Kindly Enter your First-Number:"
    },
    {
        type: "number",
        name : "numberTwo",
        message: "Kindly Enter your Second-Number:"
    },
    {
        type: "list",
        name : "operator",
        choices: ["Multiply" , "Addition" , "Substraction", "Division"],
        message: "Please Select-Operator:"
    }
]);


//console.log(answers)


const {numberOne , numberTwo , operator} = answers;
if(numberOne && numberTwo && operator) {
    let result : number = 0;


     if(operator === "Addition"){
        result =numberOne + numberTwo


     } else  if(operator === "Substraction"){
        result =numberOne - numberTwo
    
    }if(operator === "Multiply"){
        result =numberOne * numberTwo

     }else  if(operator === "Division"){
        result =numberOne / numberTwo
     }


     console.log ("Your Result is :" , result);
} else {
    console.log("Kindly Enter Valid Input.");
}