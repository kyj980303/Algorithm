function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= '';

    for (let i = 0; i < s.length; i++){
        // 공백이 있는경우
        if(s[i] == ' ') {
            answer += ' '; 
            continue;
        }
        
        // s[i]가 대문자인지 소문자인지 구한다.
        let textArr = upper.includes(s[i]) ? upper : lower;
        // n번째 인덱스를 구한다.
        let index = textArr.indexOf(s[i]) + n;
        // s[i]가 z인경우
        if(index >= textArr.length) {
            index -= textArr.length;
        }
        
        answer += textArr[index];
    }
    
    return answer;
}