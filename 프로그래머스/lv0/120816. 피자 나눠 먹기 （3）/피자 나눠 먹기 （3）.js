function solution(slice, n) {
    let result = 1;
    let a = Math.floor(n / slice); // 몫 
    let b = n % slice; // 나머지
    
    if (b > 0) {
        result = a + 1;
    } else if (b == 0) {
        result = a;
    }
    return result;
}