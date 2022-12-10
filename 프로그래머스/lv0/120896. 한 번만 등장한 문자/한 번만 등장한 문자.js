function solution(s) {
    let result = [];
    let arr = s.split("");
    
    arr.forEach((item) => {
        if (s.indexOf(item) === s.lastIndexOf(item)) {
            result.push(item);
        }
    })
    return result.sort().join("");
}