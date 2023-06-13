//Task-1
for (let i = 1; i <= 1000; i++) {
    if(i % 3 === 0 && i % 10 != 3)
    console.log(i);
}
console.log("Task-1 done");

//Task-2
for (let i = 1; i <= 1000; i++) {
    let strnum = i.toString();
    if (!strnum.includes(3)) console.log(i);
}
console.log("Task-2 done");

//Task-3
let max = 0;
for (let i = 2; i <= 1000; i+=2) {
    let digits = i.toString().split("");
    let sum = 0;
    for (let d = 0; d < digits.length; d++) sum += parseInt(digits[d]);
    if(sum === 6 && i > max) max = i;
}
console.log(max);
console.log("Task-3 done");

//Task-4
let FiveDigits = x => {if(x >= 10000 && x <= 99999 && x % 1 === 0) return true;}
let func = (x, y, z) => {
    if(FiveDigits(x) && FiveDigits(y) && FiveDigits(z)) {
        let xDigits = x.toString().split("");
        let newX = parseInt(xDigits[0] + xDigits[4]);

        let yDigits = y.toString().split("");
        let newY = parseInt(yDigits[0] + yDigits[4]);

        let zDigits = z.toString().split("");
        let newZ = parseInt(zDigits[0] + zDigits[4]);

        console.log(newX + newY + newZ);
    }
}
let x = 50800;
let y = 40897;
let z = 34657;
func(x, y, z);
console.log("Task-4 done");