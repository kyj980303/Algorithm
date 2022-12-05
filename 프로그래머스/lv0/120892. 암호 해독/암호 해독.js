function solution(cipher, code) {
    let arr = cipher.split("");
    let str = "";
    for (let i = 1; i <= arr.length; i++) {
        if (i % code === 0) {
            str += arr[i - 1];
        }
    }
    return str;
}