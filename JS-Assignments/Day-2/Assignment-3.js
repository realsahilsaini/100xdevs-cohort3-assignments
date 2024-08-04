// Assignmnet 3
function greetUserWithGender(user) {
  let prefix = "";
  if (user.gender === "male") {
    prefix = "Mr";
  } else if (user.gender === "female") {
    prefix = "Mrs";
  } 

  if(user.age < 18){
    return `Hi ${prefix} ${user.name}, your age is ${user.age}. You are a minor`;
  }else{
    return `Hi ${prefix} ${user.name}, your age is ${user.age}. You can vote`;
  }
}
const newUser = {
  name: "Sahil",
  age: 21,
  gender: "male"
};
console.log(greetUserWithGender(newUser));