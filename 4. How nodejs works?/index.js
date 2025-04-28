const fs = require('fs');          // Step 1: import file system module

const fileContent = fs.readFileSync('contacts.txt', 'utf-8');  // Step 2: read the file synchronously

console.log(fileContent);          // Step 3: print file content
