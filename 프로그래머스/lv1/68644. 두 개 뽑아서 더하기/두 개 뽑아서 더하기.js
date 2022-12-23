function solution(numbers) {
    let sum = 0;
    let arr = [];
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sum = numbers[i] + numbers[j];
            arr.push(sum);
        }
    }
    let ans = arr.sort((a, b) => a - b);
    
    for (let i = 0; i < ans.length; i++) {
        if(ans[i] != ans[i + 1]) {
            result.push(ans[i]);
        }
    }
    return result;
}