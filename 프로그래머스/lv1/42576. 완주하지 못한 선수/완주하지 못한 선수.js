function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        // 완주하지 못한 사람의 이름을 출력한다.
        if (completion[i] !== participant[i]) {
            return participant[i];
        }
    }
    
    
}