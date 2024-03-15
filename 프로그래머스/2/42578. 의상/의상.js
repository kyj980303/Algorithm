function solution(clothes) {
    var answer = 1;
    let map = new Map();
    
    for(let [closeName, type] of clothes) {
        if(map.has(type)) map.set(type, map.get(type) + 1);
        else map.set(type, 1);
    }
    
    for(let i of map.values()) {
        answer *= (i + 1) // 해당 종류의 옷을 입지 않는 경우도 있으니 +1
    }
    
    // 문제에서 최소 한 개의 의상은 입는다 했으니 아예 안입는 경우를 제외
    answer -= 1;
    return answer;
}