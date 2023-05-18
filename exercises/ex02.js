/*
  Write a series of conditional statements that:
  - Prints "not a group" is musicians is less than or equal to 0
  - Prints "solo" if musicians is equal to 1
  - Prints "duet" if musicians is equal to 2
  - Prints "trio" if musicians is equal to 3
  - Prints "quartet" if musicians is equal to 4
  - Prints "this is a large group" if musicians is greater than 4
*/

console.log();

const musicians = 5;
let answer;

switch(musicians) {
  case 0:
    answer = "not a group";
    break;
  case 1:
    answer = "solo";
    break;
  case 2:
    answer = "duet";
    break;
  case 3:
    answer = "trio";
    break;
  case 4:
    answer = "quartet";
    break;
  default:
    answer = "this is a large group";
    break;
}

console.log("Musicians:", 2);
console.log("Answer:", answer);
