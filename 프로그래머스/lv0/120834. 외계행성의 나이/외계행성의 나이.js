function solution(age) {
    let arr = String(age).split("");
    let alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    for (let i = 0; i < alp.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (Number(arr[j]) === i) {
                arr[j] = alp[i];
            }
        }
    }
    
    return arr.join("");
}