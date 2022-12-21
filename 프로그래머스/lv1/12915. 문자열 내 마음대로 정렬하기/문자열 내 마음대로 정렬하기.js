function solution(strings, n) {
    strings.sort((a, b) => {
        if (a[n] > b[n]) {
            // a가 b보다 크다.
            return 1;
        } else if (a[n] < b[n]) {
            // b가 a보다 크다.
            return -1;
        } 
        
        // a와 b가 같다면 알파벳순으로 정렬한다.
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
        
    });
    
    return strings;
}