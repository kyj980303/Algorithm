function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const [aMinus, bMinus] = [Math.abs(a - n), Math.abs(b - n)];
        if (aMinus === bMinus) {
            return b - a;
        }
        return aMinus - bMinus;
    })
    
}