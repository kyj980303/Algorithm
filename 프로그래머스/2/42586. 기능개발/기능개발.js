function solution(progresses, speeds) {
    const answer = [];
    
    
    let day = [] // 작업을 완료하는데 며칠이 걸리는지 계산해서 day에 담는다.
    for (let i = 0; i < progresses.length; i++) {
        day.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    let cnt = 1; // 배포 가능한 갯수 (처음에는 무조건 배포 가능하니깐 1로 초기화)
    let maxDay = day[0]; 
    
    for (let i = 1; i < day.length; i++) {
        // 현재보다 더 걸리는 작업이 나오기 전까지 배포 가능한 갯수를 센다.
        if (day[i] <= maxDay) { 
          cnt++; 
        } else {
          // maxDay가 변경되면 현재까지의 cnt를 answer에 담고 cnt를 1로 초기화한다.
          maxDay = day[i]; 
          answer.push(cnt);
          cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}

