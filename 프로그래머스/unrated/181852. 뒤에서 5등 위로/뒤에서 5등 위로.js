function solution(num_list) {
    let arr = num_list.sort((b, a) => b - a)
    var answer = arr.slice(5);
    
    return answer;
}