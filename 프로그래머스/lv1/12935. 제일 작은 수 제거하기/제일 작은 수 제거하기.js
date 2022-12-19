function solution(arr) {
    let min = Math.min(...arr);
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            result.push(arr[i]);
        }
    }
    
    if (arr.length === 1) {
        result.push(-1);
    }
    
    return result;
}