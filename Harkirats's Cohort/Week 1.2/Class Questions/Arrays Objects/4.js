// 4. Write a program that reverses all the elements of an array
let num = [1, 374, 37, 27, 74, 97, 52, 62, 1, -4, 76];
let temp;
for (let i = 0; i < 11 / 2; i++) {
  temp = num[10 - i];
  num[10 - i] = num[i];
  num[i] = temp;
}

for (let i = 0; i < 11; i++) {
  console.log(num[i]);
}
