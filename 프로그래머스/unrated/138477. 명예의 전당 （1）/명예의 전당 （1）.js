function solution(k, score) {
    let arr = [];
    let ans = [];
    
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            arr.push(score[i]);
        }
        if (score[i] > Math.min(...arr)) {
            arr.pop();
            arr.push(score[i]);
            arr.sort((a, b) => b - a);
        }
        
        // arr배열에서 가장 최하위 요소만 뽑아서 ans배열에 담는다.
        ans.push(Math.min(...arr));
    }
    
    return ans;
}