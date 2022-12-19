function solution(numbers) {
    let num = 0;
    let num2 = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];
    }
    
    for (let i = 0; i <= 9; i++) {
        num2 += i;
    }
    
    return num2 - num;
}