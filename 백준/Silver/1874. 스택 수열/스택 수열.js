// 문제
// 입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다.
// push연산은 +, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((item) => Number(item));
let len = input.shift();

let stack = [];
let stackNum = 1;
let ans = [];

for (let i = 0; i < len; i++) {
  let inputNum = input[i];
  while (stackNum <= inputNum) {
    stack.push(stackNum);
    stackNum++;
    ans.push("+");
  }

  let stackPop = stack.pop();
  ans.push("-");

  if (stackPop !== inputNum) {
    ans = ["NO"];
    break;
  }
}
console.log(ans.join("\n"));
