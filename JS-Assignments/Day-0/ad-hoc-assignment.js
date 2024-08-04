//Create a function that takes an array of objects as inputs, and reutrns the users whose age > 18 and are male.
function filterAdultMales(users) {
	return users.filter(user => user.age > 18 && user.gender === 'male');
}
const users = [
	{ name: 'Sahil', age: 21, gender: 'male' },
	{ name: 'Harkirat', age: 30, gender: 'male' },
	{ name: 'Sakshi', age: 17, gender: 'female' },
	{ name: 'Sara', age: 19, gender: 'female' },
	{ name: 'Raj', age: 20, gender: 'male' }
];
console.log(filterAdultMales(users).forEach(element => {
  console.log(`${element.name}(${element.age}) is an adult male`);
}));
















