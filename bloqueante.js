var fs = require("fs");
console.log("\nAbriendo el archivo");

var content = fs.readFile("el_quijote.txt");
console.log(content);

console.log("\nHaciendo otra cosa");
console.log(process.uptime());