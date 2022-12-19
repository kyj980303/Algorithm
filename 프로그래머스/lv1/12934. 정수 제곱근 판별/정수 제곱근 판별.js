function solution(n) {
    let result = 0;
    let num = Math.sqrt(n);
    if (num % 1 != 0) {
        return -1;
    } else {
        result = (num + 1) * (num + 1);
        return result;   
    }
}