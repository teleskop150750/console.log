import printResult from './printResult.js';

const body = document.querySelector('.resuts');

const print = printResult(body);
const arr = [1, 3, 5, 6];
const d = () => 4 + 5;
print(d());
print(3 + 4);
print('3 + 4');
print(arr);
print(...arr);
