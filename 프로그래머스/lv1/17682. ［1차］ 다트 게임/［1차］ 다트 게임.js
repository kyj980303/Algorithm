function solution(dartResult) {
    let score = 0;
    let answer = [];
    for (let i = 0; i < dartResult.length; i++) {
        // dartResult[i]가 숫자인지 아닌지 판별
        if (!isNaN(dartResult[i])) { // 숫자가 아니면
            
            score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
        }
        else if (dartResult[i] === "S") { // 1제곱
            answer.push(score);
        } 
        else if (dartResult[i] === "D") { // 2제곱
            answer.push(Math.pow(score, 2));
        } 
        else if (dartResult[i] === "T") { // 3제곱
            answer.push(Math.pow(score, 3));
        } 
        else if (dartResult[i] === "*") {
            answer[answer.length - 2] = answer[answer.length - 2] * 2;
            answer[answer.length - 1] = answer[answer.length - 1] * 2;
        }
        else if (dartResult[i] === "#") {
            answer[answer.length - 1] = answer[answer.length - 1] * (-1);
        }
    }
    let ans = answer.reduce((a, b) => a + b, 0);
    return ans
}