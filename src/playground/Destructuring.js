const person = {
  name: 'Brandon',
  age:22,
  location: {
    city: 'Baltimore',
    temp:60
  }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if(city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}