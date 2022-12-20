function solution(n) {
    let three = n.toString(3);	
    
    three = three.split("").reverse().join("");
    
    let ten = parseInt(three, 3);
    
    return ten;
}