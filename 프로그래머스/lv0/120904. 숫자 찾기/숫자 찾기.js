function solution(num, k) {
    let arr = String(num).split("");
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) === k) {
            result = i + 1;
            break;
        } else {
            result = -1;
        }
    }
    return result;
}