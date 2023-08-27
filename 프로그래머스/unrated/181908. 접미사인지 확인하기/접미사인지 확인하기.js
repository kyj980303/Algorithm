function solution(my_string, is_suffix) {
    // endsWith : 이 문자열의 끝이 특정 문자열로 끝나는지를 찾기 원하는 문자열을 구할 때 사용
    return my_string.endsWith(is_suffix) ? 1 : 0;
}