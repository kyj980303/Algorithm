function solution(n, lost, reserve) {
    let lostLength = lost.length;
    let answer =  n - lostLength;
    let tmp = [];
    
    // 만약 lost와 reserve에 같은 값이 있을 경우 여벌 옷이 없는 것과 같으므로
    // reserve배열에서 해당 값을 제거하고 count를 1증가시킨다.
    for (let i = 0; i < lostLength ; i ++) {
        if (reserve.includes(lost[i])) {
            reserve = reserve.filter((ele) => ele !== lost[i])
            answer += 1;
        } else {
            tmp.push(lost[i]);
        }
    }
    // 순서에 상관없이 들어올 입력을 대비해 정렬해줌
    lost = tmp.sort();
    
    // lost 원소에 +1 / -1를 한 값이 reserve에 있을 경우
    // count를 1증가시키고 reserve배열에서 해당 숫자를 제거한다.
    for (let i = 0 ; i < lostLength ; i ++) {
        if (reserve.includes(lost[i] - 1 )) {
            answer += 1 ;
            reserve = reserve.filter ((ele) => ele !== lost[i] - 1 )
        }
        else if (reserve.includes(lost[i] + 1)) {
            answer += 1;
            reserve = reserve.filter((ele) => ele !== lost[i] + 1)
        }
    }
    return answer;
}