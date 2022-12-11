function solution(balls, share) {
    return factorial(balls) / (factorial((balls - share)) * factorial(share));
    
    function factorial(num) {
        let returnfactorial = BigInt(1);
        for (let i = num; i >= 2; i--) {
            returnfactorial *= BigInt(i);
        }
        
        return returnfactorial;
    }
}