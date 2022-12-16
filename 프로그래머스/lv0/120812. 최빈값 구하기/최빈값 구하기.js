function solution(array) {
    let map = new Map();
    
    // map 객체 초기화 
    for (let i = 0; i <= Math.max(...array); i++) {
        map.set(i, 0);
    }
    
    // array 배열의 원소값과 일치하는 map 객체의 키 값을 증가시킨다.
    for (let i = 0; i < array.length; i++) {
        map.set(array[i], map.get(array[i]) + 1);
    }
    
    let arr = Array.from(map.values());
    let max = Math.max(...arr);
    
    if (arr.indexOf(max) !== arr.lastIndexOf(max)) {
        return -1;
    } else {
        return arr.indexOf(max);
    }
    
    console.log(map)
}