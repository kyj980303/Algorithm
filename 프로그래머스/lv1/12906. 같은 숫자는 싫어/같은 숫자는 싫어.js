function solution(arr) {
    let r = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            r.push(arr[i]);
        } 
    }
    
    return r;
}