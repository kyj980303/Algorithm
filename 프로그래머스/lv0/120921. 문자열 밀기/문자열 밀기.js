function solution(A, B) {
    if (A === B) {
        return 0;
    }
    
    let total = 0;
    // split을 사용하여 A의 문자열을 배열로 만든다.
    let arr = A.split("");
    
    for (let i = arr.length - 1; i >= 0; i--) {
        
        // 마지막 글자를 가져온다.
        // splice는 배열에서 지정한 부분을 가져온다.
        let temp = arr.splice(arr.length - 1, 1)[0];
        
        // 가져온 마지막 글자를 맨 앞으로 옮긴다.
        arr.unshift(temp);
        
        // total값을 하나 증가시킨다.
        total++;
        
        // join을 사용하여 A배열을 문자열로 바꾸어 B와 같은지 비교한다.
        if (arr.join("") === B) {
            // A와 B가 같으면 total을 리턴한다.
            return total;
        }
    }
    
    return -1;
}