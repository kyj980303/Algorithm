function solution(dots) {
    let one = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]);
    let one2 = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0]);
    let two = (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]);
    let two2 = (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0]);
    let three = (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]);
    let three2 = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0]);
    
    if (one === one2 || two === two2 || three === three2) {
        return 1;
    } else {
        return 0;
    }
   
}