function solution(N, stages) {
    var stageRatio = [];
    let users = stages.length;
    
    for (let i = 1; i <= N; i++) {
        // 클리어하지 못한 같은 스테이지의 갯수를 구한다.
        let noClear = stages.filter((x) => x === i).length;
        // 실패율 구하기
        let ratio = noClear / users;
        users -= noClear;
        stageRatio.push({stage: i, ratio: ratio})
    }
    
    stageRatio.sort((a, b) => {
        if (a.ratio === b.ratio) return a.stage - b.stage
        else return b.ratio - a.ratio;
    });
    
    return stageRatio.map((a) => a.stage);

}