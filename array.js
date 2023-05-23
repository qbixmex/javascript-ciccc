const colors = [];

colors.push("Red");
colors.push("Blue");
colors.push("Red");

console.log();
console.log(colors);

console.log(colors.pop());

console.log(colors);

colors.splice(2, 0, "Orange");

console.log(colors);

colors.splice(2, 1, "Pink");

console.log(colors);

colors.splice(2, 1);

console.log(colors);
