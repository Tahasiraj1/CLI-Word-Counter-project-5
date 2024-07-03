import inquirer from 'inquirer';

const answer:{
    sentence : string
} = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter your sentence to count words: "
    }
]);

const words = answer.sentence.trim().split(" ");
console.log(`Your sentence contain ${words.length} words`);