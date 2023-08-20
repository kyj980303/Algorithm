function solution(start, end) {
    var answer = [];
    
    for (let i = end; i <= start; i++) {
        answer.push(i)
    }
    return answer.sort((b,a) => a-b)
}