function solution(my_string) {
    let arr = my_string.split("");
    let arr2 = [];
    
    
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            console.log(arr[i]);
            arr2.push(arr[i]);
        } if (arr[i] === '0') {
            arr2.push(arr[i]);
        }
    }
    
    return arr2.map(a => + a).sort((a, b) => a - b);
}