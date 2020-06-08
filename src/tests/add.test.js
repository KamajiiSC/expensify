const add = (a, b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`;


test('should add two numbers', () => {
  const result = add(3, 4);
  const greeting = generateGreeting('Mike');

  expect(result).toBe(7);
});