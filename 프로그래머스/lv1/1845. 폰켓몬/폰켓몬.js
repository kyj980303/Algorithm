function solution(nums) {
    nums = nums.sort((a, b) => a - b);
    let arr = [];
    let N = nums.length / 2;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            arr.push(nums[i]);
        }
    }
    
    if (arr.length > N) {
        return N;
    } else {
        return arr.length;
    }
    
}
