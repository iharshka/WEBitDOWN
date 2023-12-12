// 2. Write a program to print the biggest number in an array
const num = [1, 374, 37, 27, 74, 97, 52, 62, 1, -4, 76];
let biggestnum = num[0];
for (let i = 0; i < num.length; i++) {
  if (num[i] > biggestnum) {
    biggestnum = num[i];
  }
}
console.log("Biggest number in the array is:", biggestnum);
