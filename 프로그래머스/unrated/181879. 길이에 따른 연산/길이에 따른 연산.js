function solution(num_list) {
    var answer = 1;
    if (num_list.length > 10) {
        answer = 0
        for (let i of num_list) {
            answer += i
        }
    } else {
         for (let i of num_list) {
            answer *= i
        }
    }
    
    return answer;
}