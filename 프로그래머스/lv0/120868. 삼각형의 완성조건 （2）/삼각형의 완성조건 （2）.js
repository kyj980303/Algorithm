function solution(sides) {
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    let result = [];
    // 1. 가장 긴 변이 sides에 있는 경우
    for (let i = 1; i <= max; i++) {
        if (min + i > max) {
            result.push(i);
        }
    }
        
    // 2. 가장 긴 변이 sides에 없는 경우
    for (let i = max + 1; i < max + min; i++) {
        result.push(i);
    }
    return result.length;
}