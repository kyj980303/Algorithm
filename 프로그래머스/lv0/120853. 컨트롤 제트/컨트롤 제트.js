function solution(s) {
    s = s.split(" ");
    let stack = [];
    let sol = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "Z") {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    const sum = stack.reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);
    
    return sum;
}