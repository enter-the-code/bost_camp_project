let number=7;
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let datevar=new Date();
let arr=[];
arr.push("aaa");
console.log();

console.log(arr);

let dict={}
dict["사람"]="동물";
dict[4]=3;
console.log(dict);
process.exit();
/*rl.on("line", (line) => {
    arr=line.split(' ');
    rl.close();
});

rl.on('close', () => {
    console.log(arr);
        process.exit();
})*/

