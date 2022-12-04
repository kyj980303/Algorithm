function solution(array) {
    return array[Math.floor(array.sort(function(a,b){return a - b}).length / 2)];
}