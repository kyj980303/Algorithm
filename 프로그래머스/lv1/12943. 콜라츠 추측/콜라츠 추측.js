function solution(num) {
    let arr = [];
    while (num > 1) {
        if (num % 2 === 0) {
            num /= 2;
            arr.push(num);
            //console.log(num);
        } else {
            num = (num * 3) + 1;
            arr.push(num);
            //console.log(arr);
        }
    }
    if (arr.length >= 500) {
        return -1;
    }
    return arr.length;
    
}