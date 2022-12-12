function solution(score) {
    let avg = score.map(v => (v[0] + v[1]) / 2)
    
    // sort()를 사용하면 기존의 avg 배열의 값도 정렬이되어 변경이 된 후 저장된다.
    // slice()의 용도 : 기존의 avg 배열의 값이 변경되지 않도록 하기 위함.
    // slice() : 지정한 부분의 배열을 리턴한다.
    let sorted = avg.slice().sort((a, b) => b - a);
    console.log(avg, sorted);
    
    return avg.map(v => sorted.indexOf(v) + 1);
    
}