function solution(s) {
    let stack = [];
    let ans = [];
    
    for (let i = 0; i < s.length; i++) {
        // 만약 s의 원소가 처음 나온거라면 ans배열에 -1을 넣어주고
        // stack 배열에 해당 원소를 담는다.
        if (!stack.includes(s[i])) {
            ans.push(-1);
            stack.push(s[i]);
        } 
        // s의 공통된 원소가 존재한다면 해당 원소의 인덱스 - 일치하는 다음 원소 인덱스를
        // 구해서 ans배열에 담는다.
        else {
            ans.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
        }
    }
    
    return ans;
}