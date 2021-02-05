const fs = require('fs');
const chalk = require('chalk');
const readline = require('readline');


let inputTxt = fs.readFileSync('input.txt').toString().toLowerCase();
console.log(chalk.greenBright("\ninput: "),inputTxt);

let patternsTxt = fs.readFileSync('patterns.txt').toString().toLowerCase();
console.log(chalk.yellow("\npatterns: "),patternsTxt);

const inp = inputTxt.split('.');
const pat = patternsTxt.split(',');
let firstFound = [];
let secondFound = [];


/* FOR FIRST SUBTASK */ 
function firstTask(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i].includes(str2[j])) {
        if (!firstFound.includes(str1[i])) {
          firstFound.push(str1[i]);
        }
      }
    }
  }
  console.log(chalk.blueBright("\nFirst: "),firstFound.join(', '));
}



/* FOR SECOND SUBTASK */ 
function secondTask(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if ((str1[i] == str2[j]) && (str2[j] !== undefined) && (str1[i].length == str2[j].length)) {
        if(!secondFound.includes(str1[i])) {
          secondFound.push(str1[i]);
        }
      }
    }  
  }
  console.log(chalk.blueBright("\nSecond: "),secondFound.join(', '));
}



/* FOR THIRD SUBTASK */ 
function thirdTask(str1, str2) {
  function diffOneLetter(dif1, dif2) {
    let dist = 0;
    dif1 = dif1.toLowerCase();
    dif2 = dif2.toLowerCase();
    for (let i = 0, j = Math.max(dif1.length, dif2.length); i < j; i++) {
      if (!dif1[i] || !dif2[i] || dif1[i] !== dif2[i]) {
        dist++;
      }
    }
    return dist;
  }
  
  console.log(chalk.blueBright("\nThird: "))
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (diffOneLetter(str1[i], str2[j]) <= 1) {
        console.log(str1[i])
      }
    }  
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.redBright('\nWhich mode u want to choose? (1, 2 or 3) '), (value) => {
  switch (value) {
    case "1":
      firstTask(inp, pat);
      break;
    case "2":
      secondTask(inp, pat);
      break;
    case "3":
      thirdTask(inp, pat);
      break;

    default:
      break;
  }
  rl.close();
});

// firstTask(inp, pat);
// secondTask(inp, pat);
// thirdTask(inp, pat);