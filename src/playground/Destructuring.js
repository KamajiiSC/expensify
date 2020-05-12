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

// const address = ['1299 S Juniper Street', 'Baltimore', 'Maryland', '19147'];

// const [street, city = 'A city', state, zip] = address;
// console.log(`You are in ${address[1]} ${address[2]}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}`);