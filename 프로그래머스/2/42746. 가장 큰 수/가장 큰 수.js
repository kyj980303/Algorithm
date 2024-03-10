function solution(numbers) {
    // 문자열로 변환
    let str = numbers.map((x) => x + '');
     
    // 문자들을 조합하여 비교정렬
    str.sort((a, b) => (b + a) - (a + b));

    // 만약 모든 배열이 0으로 구성되어있다면 '0'만 출력
    return str[0] === '0' ? '0' : str.join("");
    
}