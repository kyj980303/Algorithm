function solution(n) {
    let result = 0;
    let string = String(n)
    for (let i = 0; i < string.length; i++) {
        result += parseInt(string[i]);
    }
    return result;
}