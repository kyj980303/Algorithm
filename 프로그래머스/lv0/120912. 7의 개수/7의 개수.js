function solution(array) {
    // 배열을 문자열로 바꾼다음 7로 쪼갠 배열의 개수를 구한다.
    let result = array.join("").split(7).length - 1;
    
    return result;
}