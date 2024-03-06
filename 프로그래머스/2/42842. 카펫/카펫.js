function solution(brown, yellow) {
    var answer = [];
    
    // 전체 면적에서 (가로 - 2) * (세로 - 2) 값이 yellow 와 일치할 때의
    // 넓이와 높이가 가로와 세로가 된다.
    // yellow는 최소 1개는 있어야 한다고 적혀있으니 가로,세로는 최소한 3 이상이다.
    let total = brown + yellow
    for (let h = 3; h < total; h++) {
        let w = total / h 
        if ((w - 2) * (h - 2) === yellow) {
            let arr = [w, h]
            // 가로 길이 >= 세로길이
            answer = arr.sort((a, b) => b - a)
        }
    }
    
    return answer;
}