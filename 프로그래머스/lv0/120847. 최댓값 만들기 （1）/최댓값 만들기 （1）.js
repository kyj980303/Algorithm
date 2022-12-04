function solution(numbers) {
    
    let arr = numbers.sort(function (a,b) {return a - b});
    console.log(arr);
    return answer = arr[numbers.length - 2] * arr[numbers.length -1];
}