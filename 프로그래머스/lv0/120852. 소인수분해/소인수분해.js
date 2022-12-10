function solution(n) {
    const smallNumber = []
    let a = 2
    
    while(n !== 1) {
        if(n % a === 0) {
            smallNumber.push(a)
            n /= a
            a = 2
        } else {
            a += 1
        }
    }
    
    return Array.from(new Set(smallNumber))
}
