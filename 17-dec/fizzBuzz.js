const fizzBuzz = (number) => {
  const array = [];
  for (let i = 1; i <= number; i += 1) {
    if (i < 3) {
      array.push(i.toString());
    } else if (i % 5 === 0 && i % 3 === 0) {
      array.push('FizzBuzz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else {
      array.push(i.toString());
    }
  }
  return array;
};
export { fizzBuzz };
