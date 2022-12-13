function solution(polynomial) {
    polynomial = polynomial.split("+");
    
    let plusx = 0;
    let plus = 0;
    
    polynomial.forEach(item => {
        if (item.includes('x')) {
            
            const polyArr = item.split('x');
            
            if (polyArr[0] === ' ' || polyArr[0] === '') {
                plusx += 1;
            } else if (polyArr[0] !== ' ') {
                plusx += Number(polyArr[0]);
            }
        }
        
        if (!item.includes('x')) {
            plus += Number(item);
        }
    });
    
    if (plusx !== 0 && plus !== 0) {
        if (plusx === 1) {
            return `x + ${plus}`;
        }
        return `${plusx}x + ${plus}`;
    }
    
    if (plusx !== 0 && plus === 0) {
        if (plusx === 1) {
            return "x";
        }
        return `${plusx}x`;
    }
    
    if (plusx === 0 && plus !== 0) {
        return `${plus}`;
    }
    
     if (plusx === 0 && plus === 0) {
        return "0";
    }

}