function solution(order) {
    let count = 0;
    let arr = String(order).split("");
    
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i] != 0) && Number(arr[i]) % 3 === 0) {
            count++;
        } 
    }
    return count;
}