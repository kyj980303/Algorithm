function solution(i, j, k) {
    let count = 0;
    let arr = [];
    for (let n = i; n <= j; n++) {
        arr.push(n);  
    }
    
    let str = arr.join("");
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) === k) {
            count++;
        }
    }
    return count;
}