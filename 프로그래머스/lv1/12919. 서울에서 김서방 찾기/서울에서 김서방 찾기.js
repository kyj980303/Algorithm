function solution(seoul) {
    let arr = String(seoul).split(",");
    let num = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Kim') {
            num = i;
        }
    }
    return `김서방은 ${num}에 있다`;
}