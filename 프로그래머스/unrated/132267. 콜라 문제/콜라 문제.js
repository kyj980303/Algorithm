function solution(a, b, n) {
    let result = 0;
    
    // 남은 빈 병으로 콜라를 받을 수 있다면
    while (n >= a) { 
        result += Math.floor(n / a) * b; 
        n = (Math.floor(n / a) * b) + (n % a);
    }

    return result;
}