function solution(s) {
    let alp = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"
               , "nine"]
    
    for (let i = 0; i < alp.length; i++) {
        let arr = s.split(alp[i]);
        s = arr.join(i);
    }
    
    return Number(s);
}