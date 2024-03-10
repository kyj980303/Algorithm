function solution(array, commands) {
    let result = [];
    
    for (let i = 0; i < commands.length; i++) {
        // commands[i][0] 부터 commands[i][1] 번째까지 쪼갠 후 오름차순 정렬
        let arr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)
        // commands[i][2] 번째 값 꺼내서 result 에 담음
        result.push(arr[commands[i][2] - 1])
    }
    
    return result;
}