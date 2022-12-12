function solution(chicken) {
    let cuppon = chicken;
    let service = 0;
    
    while (cuppon >= 10) {
        service += Math.floor(cuppon / 10);
        // 남은 쿠폰 수
        cuppon = (cuppon % 10) + Math.floor(cuppon / 10);
    }
    return service;
}