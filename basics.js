//* Global Scope
//* Representing the universe
let name = "Universe";
let population = "10 Billion";

console.log("Name:", name);
console.log("Population", population);

console.log("*".repeat(40));

{
  //* Local Scope
  //* Representing Planet Scope
  let planet = "earth";
  let population = "7.8 Billion";
  console.log("Name:", name);
  console.log("Population", population);
}
