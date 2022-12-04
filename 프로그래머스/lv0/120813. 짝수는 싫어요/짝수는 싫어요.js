function solution(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0){
            // i를 배열에 추가
            arr.push(i)
        }
    }
    return arr;
}