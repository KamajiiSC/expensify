// const person = {
//   name: 'Brandon',
//   age:22,
//   location: {
//     city: 'Baltimore',
//     temp:60
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Baltimore', 'Maryland', '19147'];

console.log(`You are in ${address[1]} ${address[2]}`)