function solution(t, p) {
    let arr = [];
    let len = p.length;
    let ans = [];
    
    for (let i = 0; i < t.length; i++) {
        // p의 길이만큼 t배열을 쪼갠다.
        let split = t.substring(i, len + i);
        // 쪼갠 배열의 길이와 p의 길이가 같은 것만 빈 배열에 담는다.
        if (split.length === len) {
            arr.push(split);
        }
    }
    
    // 쪼갠 배열의 원소들이 p보다 작거나 같은경우를 구한다.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= p) {
            ans.push(arr[i]);
        }
    }
    return ans.length;
}