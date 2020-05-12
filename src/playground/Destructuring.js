const person = {
  name: 'Brandon',
  age:22,
  location: {
    city: 'Baltimore',
    temp:60
  }
};

const { name, age } = person;
console.log(`${name} is ${age}.`);

console.log(`It's ${person.location.temp} in ${person.location.city}.`);