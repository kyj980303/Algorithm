function solution(X, Y) {
    let answer = ''
    X = X.split("")
    Y = Y.split("")
    
    for(let i = 0 ; i < 10 ; i ++) {
        const arrX = X.filter(a => Number(a) === i).length
        const arrY = Y.filter(a => Number(a) === i).length
        answer += String(i).repeat(Math.min(arrX, arrY))
    }
    
    if (answer.length === 0) {
        return "-1";
    }
    if (Number(answer) === 0) {
        return "0";
    }
    
    answer = answer.split("").sort((a, b) => Number(b) - Number(a));
    return answer.join("")
}