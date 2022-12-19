function solution(x) {
    let arr = String(x).split("");
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        result += Number(arr[i]);
    }
    
    if (x % result === 0) {
        return true;
    } else {
        return false;
    }
    
}