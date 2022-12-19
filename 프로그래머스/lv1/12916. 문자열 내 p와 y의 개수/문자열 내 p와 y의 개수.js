function solution(s){
    let lower = s.toLowerCase();
    
    let count = 0;
    let count2 = 0;
    
    for (let i = 0; i < lower.length; i++) {
        if (lower[i] === 'p') {
            count++;
        } 
        if (lower[i] === 'y') {
            count2++
        }
    }
    
    if (count === count2) {
        return true;
    } else {
        return false;
    }
    
}