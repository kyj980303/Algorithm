function solution(dots) {
    dots = dots.sort();
    let x = dots[dots.length - 1][0];
    let x2 = dots[0][0];
    let y = dots[dots.length - 1][1];
    let y2 = dots[0][1];
    let result = 0;
 
    result = Math.abs((x - x2) * (y - y2));
    
    return result;
}