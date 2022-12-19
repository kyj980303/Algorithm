function solution(absolutes, signs) {
    let result = 0;
    
    for (let i = 0; i < absolutes.length; i++) {  
        if (String(signs[i]) === 'true') {
            absolutes[i] = +absolutes[i];
        } else {
           absolutes[i] =  -absolutes[i];
        }
    }
    
    for (let i = 0; i < absolutes.length; i++) {
        result += absolutes[i];
    }
    
    return result;
}