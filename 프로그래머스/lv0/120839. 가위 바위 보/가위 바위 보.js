function solution(rsp) {
    let result = [];
    let arr = rsp.split("");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            result[i] = 5; 
        } else if (arr[i] === '2') {
            result[i] = 0;
        } else {
            result[i] = 2;
        }
    }
    
    result.push(result);
    return result.join("");   
}