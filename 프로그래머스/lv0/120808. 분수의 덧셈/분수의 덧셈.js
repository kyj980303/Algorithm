function solution(denum1, num1, denum2, num2) {
    let denum = [denum1, denum2];
    let num = [num1, num2];
    
    let a = (num1 * denum2) + (num2 * denum1); 
    let b = num1 * num2; 
    let div = 0;
    
    let arr = [];
    arr.push(a, b);
    
    for (let i = 0; i <= Math.max(...arr); i++) {
        if (a % i === 0 && b % i === 0) {
            div = i;
        }
    }
    
    arr[0] = Math.floor(a / div);
    arr[1] = Math.floor(b / div);
    
    return arr;
}