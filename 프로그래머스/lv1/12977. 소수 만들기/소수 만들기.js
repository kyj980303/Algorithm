function solution(nums) {
    let arr = [];
    let count = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k])) {
                    count++;
                }
            }
        }   
    }
    
    return count;
}

function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        } 
    }
    return true;
}