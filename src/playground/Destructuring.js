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

const { city, temp } = person.location;
if(city && temp) {
  console.log(`It's ${temp} in ${city}.`);
}