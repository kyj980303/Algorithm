// 문제
// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
const answer = [];

const len = input.shift();

for (let i = 0; i < len; i++) {
  if (input[i].includes("pop")) {
    answer.push(stack.pop() || -1);
  } else if (input[i].includes("size")) {
    answer.push(stack.length);
  } else if (input[i].includes("empty")) {
    answer.push(stack[0] ? 0 : 1);
  } else if (input[i].includes("top")) {
    answer.push(stack[stack.length - 1] || -1);
  } else {
    stack.push(input[i].split(" ")[1]);
  }
}

console.log(answer.join("\n"));