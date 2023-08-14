function solution(myString, pat) {
    var answer = '';
    for (let str of myString) {
        if (str === "A") {
            answer += "B"
        } else {
            answer += "A"
        }
    }
    
    return Number(answer.includes(pat));
}