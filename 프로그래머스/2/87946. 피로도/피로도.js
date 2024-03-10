function solution(k, dungeons) {
    // 최소 필요 피로도 : 최소한의 피로도
    // 소모 피로도 : 탐험 후 소모되는 피로도
    // ex) 최소 필요 피로도 80, 소모 피로도 20 -> 유저의 피로도가 최소한 80 이상이어야하고 탐험 후 20 소모
    // k : 유저의 현재 피로도
    // dungeons : [[최소 필요 피로도, 소모 피로도], [최소 필요 피로도, 소모 피로도],...]
    // 유저가 탐험할 수 있는 최대 던전 수는?
    let answer = 0;
    const visited = Array(dungeons.length).fill(false) // 방문 여부
    
    // hp: 남은 피로도, L: 진행단계
    function dfs(hp, L) { 
        // 던전 수 만큼 반복한다.
        for (let i = 0; i < dungeons.length; i++) {
            // 방문하지 않았고 현재 남은 피로도가 최소 필요 피로도 보다 크거나 같으면 실행 
            if (!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true // 방문처리
                
                dfs(hp - dungeons[i][1], L + 1) 
                
                visited[i] = false // 탐색 후 방문을 끝낸다.
            } 
        }
        // 가장 깊이 들어간 진행단계를 answer에 넣어준다.
        answer = Math.max(answer, L)
    }
    
    dfs(k, 0) // 유저 피로도, 진행단계
    
    return answer;
}