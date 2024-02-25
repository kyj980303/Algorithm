// 문제 9093
// 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let len = input.shift();

for (let i = 0; i < len; i++) {
  let stack = [];
  let result = "YES";
  for (let j = 0; j < input[i].length; j++) {
    // "(" 이거면 arr에 push()
    if (input[i][j] === "(") {
      stack.push("(");
    } else {
      // ")" 이거면 arr에서 pop()
      // 만약 pop()할게 없다면 NO 출력
      if (stack.length !== 0) {
        stack.pop();
      } else {
        result = "NO";
      }
    }
  }
  // 최종적으로 arr의 길이가 0이 아니면 NO 출력
  if (stack.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
