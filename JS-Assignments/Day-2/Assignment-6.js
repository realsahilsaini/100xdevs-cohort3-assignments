//Assignmnet 6
let users = {};
function newUser(name, age, address, city, country) {
  let user = {
    name: name,
    age: age,
    address: {
      street: address,
      city: city,
      country: country
    }
  };
  return user;
}
const user1 = newUser("Sahil", 21, "123 Main St", "Mumbai", "India");
console.log(user1);
const user2 = newUser("Jane", 30, "456 Elm St", "Los Angeles", "USA");
console.log(user2);
