function solution(s) {
    let result = [0,0];
    
    while (s !== "1") {
        s = s.split(""); // 배열로 만든다.
        let one = s.filter((v) => v === "1").length; // 1의 개수를 구한다.
        result[0] ++; // 회차를 증가시킨다.
        result[1] += s.length - one; // 0의 길이를 저장한다.
        s = one.toString(2); // 1의 길이를 2진수로 표현한다.
    }
    
    return result;
}