function solution(array, commands) {
    let arr = [];
    let result = [];
    let num = [];
    
    for (let i = 0; i < commands.length; i++) {
        // 원하는 길이만큼 자른다.
        arr.push(array.slice(commands[i][0] - 1, commands[i][1]));
        
        // num배열에 가져올 원소의 인덱스값을 담는다.
        num.push(commands[i][2]);
    }
    
    for (let i = 0; i < arr.length; i++) {
        // 잘라서 저장한 배열을 오름차순으로 정렬한다.
        arr[i].sort((a, b) => a - b);
    }
    
    for (let i = 0; i < arr.length; i++) {
        // 결과값을 result배열에 담는다.
        result.push(arr[i][num[i] - 1]);
    }
    
    return result;
}