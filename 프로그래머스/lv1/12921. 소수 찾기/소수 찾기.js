function solution(n) {
    let arr = [];
    
    for (let i = 0; i <= n; i++) {
        // true는 소수라는 뜻
        arr.push(true);
    }
    
    // 소수인지를 판별하기위해 2부터 n의 제곱근까지 반복문을 돌린다.
    for (let i = 2; i <= Math.sqrt(n); i++) {
        
        // 만약 arr[i]가 소수(true)라면
        if (arr[i]) {
            
            // i를 제외한 i의 배수를 false로 변경시킨다.
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }   
        }
    }
    
    // 0과 1은 소수가 아니니깐 false로 값을 설정한다.
    arr.splice(0, 2, false, false);
    
    // true만 걸러내고 true의 갯수를 구한다.
    const result = arr.filter((value) => {
       return value !== false; 
    });
    
    return result.length;
    
}