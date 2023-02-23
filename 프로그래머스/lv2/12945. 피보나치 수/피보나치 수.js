function solution(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            arr.push(0);
        }
        if (i === 1) {
            arr.push(1);
        }
        if (i >= 2) {
            let sum = arr[i - 2] + arr[i - 1];
            arr.push(sum % 1234567)
        }
    }
    let answer = arr[n] % 1234567;
    return answer;
}