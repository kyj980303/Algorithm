function solution(n, control) {
    var answer = 0;
    const num = {
        w:1,
        s:-1,
        d:10,
        a:-10
    }
    answer = [...control].reduce((acc, cur) => acc + num[cur], n);
    return answer;
}