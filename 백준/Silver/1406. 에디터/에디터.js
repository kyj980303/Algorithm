// 문제 1406
// L: 커서를 왼쪽으로 한 칸 옮김 (커서가 문장의 맨 앞이면 무시됨)
// D: 커서를 오른쪽으로 한 칸 옮김 (커서가 문장의 맨 뒤이면 무시됨)
// B: 커서 왼쪽에 있는 문자를 삭제함 (커서가 문장의 맨 앞이면 무시됨)
// 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
// P $:	$라는 문자를 커서 왼쪽에 추가함
// 모든 명령어를 수행하고 난 후 편집기에 입력되어 있는 문자열 출력
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 커서를 기준으로 두개의 스택을 만든다.
let leftStack = input.shift().split("");
let rightStack = [];
let len = input.shift();

for (let i = 0; i < len; i++) {
  let [cursor, value] = input[i].split(" ");
  // P: 왼쪽에 추가
  if (cursor === "P") {
    leftStack.push(value);
  } else if (cursor === "L" && leftStack.length) {
    // L: 커서 왼쪽으로
    rightStack.push(leftStack.pop());
  } else if (cursor === "D" && rightStack.length) {
    // D: 커서 오른쪽으로 이동
    leftStack.push(rightStack.pop());
  } else if (cursor === "B") {
    // B: 커서 왼쪽에 있는 문자 삭제
    leftStack.pop();
  }
}
let ans = leftStack.join("");
ans += rightStack.reverse().join("");

console.log(ans);
