function solution(answers) {
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let count = [0,0,0];
    let result = [];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === one[i % 5]) {
            count[0]++;
        }
        if (answers[i] === two[i % 8]) {
            count[1]++;
        }
        if (answers[i] === three[i % 10]) {
            count[2]++;
        }
    }
    
    let maxCount = Math.max(...count)
    for (let i = 0; i < 3; i++) {
        if (count[i] === maxCount) {
            result.push(++i)
            i--;
        }
    }
   
    return result;
}