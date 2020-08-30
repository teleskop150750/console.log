import printResult from './consoleLog.js';

const body = document.querySelector('.console');
const print = printResult(body);

print(1234, 'текст')

const arr = [1, 3, 5, 6];

print(arr);
print(...arr);
print(42, arr, 42);
print(42, ...arr, 42);

const sum = (a = 2) => a ** 2;

print(sum);
print(sum(3))

const obj = {
  name: 'Иван',
  sayHi() {
    return `Привет ${this.name}`;
  },
}
print(obj);