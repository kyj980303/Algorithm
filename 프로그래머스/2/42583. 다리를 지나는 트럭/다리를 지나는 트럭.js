function solution(bridge_length, weight, truck_weights) {
    var answer = 0; // 모든 트럭이 도작하는데 걸리는 시간
    // 다리 위에 올라간 트럭 배열
    let bridge = Array(bridge_length).fill(0)
    // 다리 위에 있는 트럭들의 무게
    let bridge_sum = 0;
    
    // 1초 증가시키고 제일 앞에있는 트럭 선택해 대기시킨다.
    answer++ 
    bridge.shift() 
    bridge_sum += truck_weights[0] // 현재 다리 위 트럭 무게 
    bridge.push(truck_weights.shift())
    
    while(bridge_sum > 0) {
        // 출발하면 count 증가 + 다음 트럭 출발 대기
        answer++ 
        // 다리 위 트럭 무게 체크
        bridge_sum -= bridge.shift(); 
    
        // 만약 출발한 트럭과 다음 트럭의 무게가 최대 무게를 넘어가면 다음 트럭 대기 + count 증가
        if (bridge_sum + truck_weights[0] <= weight) {
            bridge_sum += truck_weights[0]
            bridge.push(truck_weights.shift())
        } else {
            bridge.push(0)
        }
    }
    
    // 트럭이 도착하면 count 증가
    return answer;
}

  