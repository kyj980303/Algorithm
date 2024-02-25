// 문제 9093
// 문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let len = input.shift();

for (let i = 0; i < len; i++) {
  // 공백으로 단어 쪼개기
  let strArr = input[i].split(" ");
  let ans = "";

  for (let spel of strArr) {
    // 알파벳으로 하나씩 쪼갠 후 뒤집고 다시 합치기
    ans += `${spel.split("").reverse().join("")} `;
  }
  console.log(ans);
}

