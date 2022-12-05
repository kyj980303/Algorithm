function solution(box, n) {
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 0; i < box.length; i++){
        a = Math.floor(box[0] / n);
        b = Math.floor(box[1] / n);
        c = Math.floor(box[2] / n);
    }
    return a * b * c;
}