function solution(my_str, n) {
    // my_str의 문자열을 배열로 만든다.
    let arr = my_str.split("");
    // 결과를 담을 배열을 준비한다.
    let result = [];
    
    while (arr.length > 0) {
        // result 배열에 arr 배열을 n개로 쪼갠 후 문자열로 변경하여 추가한다.
        result.push(arr.splice(0, n).join(""));
    }
    return result;
}