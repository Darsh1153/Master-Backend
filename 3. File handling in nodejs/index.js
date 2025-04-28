const fs = require("fs");

// if you want to create a new file
// writeFileSync is synchronus call
const res = fs.writeFileSync("./text.txt", "Hey there! This is written by Darshan.");
console.log(res);

// writeFile is async call
fs.writeFile("./dummy.txt", "Hiiii hello", (error) => error);



// let's say we want to read a file
// readFileSync is a sync call and can store in variable also.
const result = fs.readFileSync("./darshan.txt", "utf-8");
console.log(result);

// readFile is async call and can't store in variable, but it takes another argument for error and result.
fs.readFile('./darshan.txt', "utf-8", (err, res) => {
    if(err){
        console.log("error", err);
    }else{
        console.log(res);
    }
})

fs.unlink('./dummy.txt', (err) => {
    if(err){
        console.log("error", err);
    }
    else{
        console.log("dummy file deleted")
    }
})