function solution(s){
    let arr = [];
    
    // 처음이 닫는 괄호면 false리턴
    if(s[0] === ')') {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        // 여는 괄호라면 배열에 담아주고 닫는 괄호이면 배열에서 제거한다.
        s[i] === '(' ? arr.push(s[i]) : arr.pop(s[i]);
    }
    
    // 최종적으로 배열이 비어있으면 true출력 비어있지 않으면 false출력
    return arr.length > 0 ? false : true;
    
}