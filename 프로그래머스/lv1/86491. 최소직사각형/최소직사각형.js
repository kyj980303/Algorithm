function solution(sizes) {
    let arr = [];
    let left = [];
    let right = [];
    
    for (let i = 0; i < sizes.length; i++) {
        arr.push(sizes[i].sort((a, b) => b - a));
    }
    
    for (let i = 0; i < arr.length; i++) {
        left.push(sizes[i][0]);
    }
    
    for (let i = 0; i < arr.length; i++) {
        right.push(sizes[i][1]);
    }
    
    let lMax = Math.max(...left);
    let rMax = Math.max(...right);
    
    return lMax * rMax;
}