function solution(my_string) {
    var answer = [];
    let split = my_string.split(' ')
    
    for (let i = 0; i < split.length; i++) {
        if (split[i] !== '') {
            answer.push(split[i])
        }
    }
    
    return answer;
}