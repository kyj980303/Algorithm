function solution(s) {
    let arr = s.split(" ");
    let result = [];
    let r = [];
    
    for(let i = 0; i < arr.length; i++) {
        let r = [];
        
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 === 0) {
                r.push(arr[i][j].toUpperCase());
            } else {
                r.push(arr[i][j].toLowerCase());
            }
        }
        
        result.push(r.join(""));
    }
    
   return result.join(" ");
}