const fs = require('fs');
const chalk = require('chalk');


let inputTxt = fs.readFileSync('input.txt').toString().toLowerCase();
console.log(chalk.greenBright("\ninput: "),inputTxt);

let patternsTxt = fs.readFileSync('patterns.txt').toString().toLowerCase();
console.log(chalk.yellow("\npatterns: "),patternsTxt);

const inp = inputTxt.split('.');
const pat = patternsTxt.split(',');
let firstFound = [];
let secondFound = [];

/* FOR FIRST SUBTASK */ 
for (let i = 0; i < inp.length; i++) {
  for (let j = 0; j < pat.length; j++) {
    if (inp[i].includes(pat[j])) {
      if (!firstFound.includes(inp[i])) {
        firstFound.push(inp[i]);
      }
    }
  }
}
console.log(chalk.blueBright("\nFirst: "),firstFound.join(', '));


/* FOR SECOND SUBTASK */ 
for (let i = 0; i < inp.length; i++) {
  for (let j = 0; j < pat.length; j++) {
    if ((inp[i] == pat[j]) && (pat[j] !== undefined) && (inp[i].length == pat[j].length)) {
      if(!secondFound.includes(inp[i])) {
        secondFound.push(inp[i]);
      }
    }
  }  
}
console.log(chalk.blueBright("\nSecond: "),secondFound.join(', '));


/* FOR THIRD SUBTASK */ 
function diffOneLetter(str1, str2) {
  let dist = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0, j = Math.max(str1.length, str2.length); i < j; i++) {
    if (!str1[i] || !str2[i] || str1[i] !== str2[i]) {
      dist++;
    }
  }
  return dist;
}

console.log(chalk.blueBright("\nThird: "))
for (let i = 0; i < inp.length; i++) {
  for (let j = 0; j < pat.length; j++) {
    if (diffOneLetter(inp[i], pat[j]) <= 1) {
      console.log(inp[i])
    }
  }  
}