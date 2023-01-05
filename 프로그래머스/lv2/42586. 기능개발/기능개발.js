function solution(progresses, speeds) {
    // 남은 작업량
    let work = [];
    // 남은 작업물을 다 끝내는데 걸리는 날짜
    let day = [];
    // 배포 가능한 개수
    let count = [0];
    
    for (let i = 0; i < progresses.length; i++) {
        work.push(100 - progresses[i]);
    }
    
    for (let i = 0; i < speeds.length; i++) {
        // 남은 작업을 완료하는데 며칠이 걸리는지 구한다.
        work[i] % speeds[i] === 0 ? day.push(work[i] / speeds[i]) : 
        day.push(Math.floor(work[i] / speeds[i]) + 1);
    }
    
    let maxDay = day[0];
    for (let i = 0, j = 0; i < day.length; i++) {
        if (day[i] <= maxDay) {
            count[j] += 1;
        } else {
            maxDay = day[i];
            count[++j] = 1;
        }
    }
    return count;
}