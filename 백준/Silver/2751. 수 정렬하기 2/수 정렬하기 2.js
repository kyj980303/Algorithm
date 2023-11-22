let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])

let arr = []
for (let i = 1; i <= num; i++) {
    arr.push(Number(input[i]))
}

arr.sort((a,b) => a - b)

let answer = ''
for (let i of arr) {
    answer += i + '\n'
}

console.log(answer)