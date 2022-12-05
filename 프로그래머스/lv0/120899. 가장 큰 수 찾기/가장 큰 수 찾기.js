function solution(array) {
    let index = 0;
    let max = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    // console.log(max, index);
    result.push(max, index);
    return result;
}