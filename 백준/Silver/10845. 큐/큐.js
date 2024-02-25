// 문제 10845
// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const len = input.shift();

const queue = [];
const ans = [];

for (let i = 0; i < len; i++) {
  const [command, value] = input[i].split(" ");
  switch (command) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      ans.push(queue.shift() || -1);
      break;
    case "size":
      ans.push(queue.length);
      break;
    case "empty":
      ans.push(queue[0] ? 0 : 1);
      break;
    case "front":
      ans.push(queue[0] || -1);
      break;
    case "back":
      ans.push(queue[queue.length - 1] || -1);
      break;
  }
}
console.log(ans.join("\n"));