function solution(s) {
    let arr = s.split("");
    
    if (arr.length % 2 != 0) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)];
    }
}