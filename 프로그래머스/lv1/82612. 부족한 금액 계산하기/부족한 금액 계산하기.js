function solution(price, money, count) {
    let p = 0;
    
    for (let i = 1; i <= count; i++) {
        p += price * i;
    }
    
    if (p === money) {
        return 0;
    }
    
    if (p < money) {
        return 0;
    }
    
    return p - money;
}