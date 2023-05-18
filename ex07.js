let salary = 0;
let degree = "Professional degree";

switch(degree) {
  case "high school diploma":
    salary = 35256;
    break;
  case "associate's degree":
    salary = 35256;
    break;
  case "Bachelor's degree":
    salary = 59124;
    break;
  case "Master's degree":
    salary = 69732;
    break;
  case "Professional degree":
    salary = 89960;
    break;
  case "Doctoral degree":
    salary = 84396;
    break;
  default:
    salary = 25636;
}

console.log(`\nIn 2015, a person with "${degree}" earned an average of $${salary.toLocaleString("en-US")}/year`)