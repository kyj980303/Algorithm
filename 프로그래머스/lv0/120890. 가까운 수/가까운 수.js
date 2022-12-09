function solution(array, n) {
    let arr = [];
    
    array.forEach((item) => {
       arr.push(Math.abs(item - n)); 
    });
    
    const min = Math.min(...arr);
    
    let arr2 = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            arr2.push(array[i]);
        }
    }
    return Math.min(...arr2);
}