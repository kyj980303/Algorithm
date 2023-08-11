function solution(num_list) {
    // findIndex : 만족하는 인덱스 값을 반환 
    // 만족하는 값이 없으면 -1을 반환
    
    let answer = num_list.findIndex(a => a < 0)
    
    return answer;
}