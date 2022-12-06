function solution(my_string) {
    let arr = my_string.split("");
    const result = arr.filter((a, b) => my_string.indexOf(a) === b).join("");
    return result;
}