const fizzBuzz = require('./fizzbuzz');

describe ('fizzBuzz', () => {
    it('returns FizzBuzz',() => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('returns Fizz',() => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('returns Buzz',() => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('returns FizzBuzz',() => {
      expect(fizzBuzz(7)).toBe(7);
    });
});
