function solution(nums) {
    let answer = [...new Set(nums)]; // 중복 제거
    let pickNum = nums.length / 2 // 선택할 포켓몬 수
    
    // 만약 종류가 선택할 포켓몬 수보다 많다면 pickNum 리턴
    // 만약 종류보다 pickNum이 많으면 종류 만큼 리턴
    return answer.length > pickNum ? pickNum : answer.length;
} 