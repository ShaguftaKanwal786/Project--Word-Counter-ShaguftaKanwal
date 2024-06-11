#! /user/bin/env node


import inquirer from "inquirer";

let answer =await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"enter your sentence to count the word"


}
]);
const words =answer.sentence.trim().split(" ");
console.log(words);

console.log(`your sentence word counter is ${words.length}`);




