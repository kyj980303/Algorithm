let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
input = Number(input[0]);

// N번째 피보나치 수 구하기
// 피보나치수 : 첫 번째 숫자는 0, 두 번쨰 숫자는 1, 세 번쨰 숫자부터 앞에 수를 더한 값이 된다. 따라서 1, 네 번쨰 숫자는 2
function solution(num) {
  if (num < 2) {
    return num;
  } else {
    return solution(num - 1) + solution(num - 2);
  }
}
console.log(solution(input));
