function solution(lottos, win_nums) {
    let arr = [];
    let count = 0;
    let result = [];
    
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            count++;
        }
        for (let j = 0; j < win_nums.length; j++) {
            if (lottos[i] === win_nums[j]) {
                arr.push(lottos[i])
            }
        }
    }
    
    let max = arr.length + count;
    let min = arr.length;
    
    if (max === 6) {
        result.push(1)
    } else if (max === 5) {
        result.push(2)
    } else if (max === 4) {
        result.push(3)
    } else if (max === 3) {
        result.push(4)
    } else if (max === 2) {
        result.push(5)
    } else {
        result.push(6)
    }
    
    if (min === 6) {
        result.push(1)
    } else if (min === 5) {
        result.push(2)
    } else if (min === 4) {
        result.push(3)
    } else if (min === 3) {
        result.push(4)
    } else if (min === 2) {
        result.push(5)
    } else {
        result.push(6)
    }
    
    return result;
}