function solution(n, m) {
    let arr = [n, m];
    let max = Math.max(...arr);
    let a = 0;
    let arr2 = [];
    
    for (let i = 1; i <= max; i++) {
        if (n % i === 0 && m % i === 0) {
            a = i;
        }
    }
    
    let b = n / a;
    let c = m / a;
    let mult = a * b * c;
    arr2.push(a);
    arr2.push(mult);

    return arr2;
}