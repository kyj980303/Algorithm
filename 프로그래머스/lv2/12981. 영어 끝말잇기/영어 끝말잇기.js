function solution(n, words) {
    let before = words[0];
    let turn = 1;
    
    for (let i = 1; i < words.length; i++) {
        const player = i % n + 1;
        // 끝말잇기가 성립 안되는 경우
        if (before.slice(-1) !== words[i][0]) {
            return [player, turn]
        }
        // 같은 단어를 중복 사용한 경우
        if (words.findIndex((item) => words[i] === item) !== i) {
            return [player, turn]
        }
        before = words[i];
        if (player === n) {
            turn += 1
        }
    }
     
    return [0,0]
}