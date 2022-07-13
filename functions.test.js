const calculator = require("./calculator.js");
const capitalizeString = require("./capitalize.js");
const reverseString = require("./reverseString.js");
const  stringLength  = require("./stringLength.js");

// task 1

test('return length of a word', () => {
  expect(stringLength('hola')).toBe(4);
});

test('words bigger than 10 or less that 1', () => {
  expect(stringLength('hola como estas')).toBe('error');
});

//  task 2

test(`return a reversed word`, () => {
  expect(reverseString('pelo')).toBe('olep');
});

// task 3

describe('calculator test:', () => {
  describe('sum test: ', () => {
    test('add',() => {
      expect(calculator.add(5,2)).toBe(5+2);
    });
  
    test('add',() => {
      expect(calculator.add(124,3025)).toBe(124+3025);
    });
  
    test('add',() => {
      expect(calculator.add(465,458)).toBe(465+458);
    });
  })
  describe('substract test: ', () => {
    test('subtract',() => {
      expect(calculator.subtract(5,2)).toBe(5-2);
    });
    test('subtract',() => {
      expect(calculator.subtract(135,4652)).toBe(135-4652);
    });
    test('subtract',() => {
      expect(calculator.subtract(458,1002)).toBe(458-1002);
    });
  })
  describe('divide test: ', () => {
    test('divide',() => {
      expect(calculator.divide(20,2)).toBe(10);
    });
    test('divide',() => {
      expect(calculator.divide(120,15)).toBe(120/15);
    });
    test('divide',() => {
      expect(calculator.divide(452,789)).toBe(452/789);
    });
  })
  describe('multiply test: ', () => {
    test('multiply',() => {
      expect(calculator.multiply(20,2)).toBe(20*2);
    });
    test('multiply',() => {
      expect(calculator.multiply(87,45)).toBe(87*45);
    });
    test('multiply',() => {
      expect(calculator.multiply(789,465)).toBe(789*465);
    });
  })
});

// task 4

test('capitalize the first letter', () => {
  expect(capitalizeString('capitalize')).toBe('Capitalize')
})

test('expexted to throw an error', () => {
  expect(capitalizeString(123)).toThrow(Error);
})
