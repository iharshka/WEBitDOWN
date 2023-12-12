// 3. Write a program that prints all the male people’s first name given a complex object
const allUsers = [
  {
    firstname: "Harsh",
    age: 22,
    gender: "male",
  },
  {
    firstname: "Arpita",
    age: 25,
    gender: "female",
  },
  {
    firstname: "Harshita",
    age: 28,
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstname"]);
  }
}
console.log(typeof allUsers);
