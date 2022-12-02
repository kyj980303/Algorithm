function solution(my_string) {
    let small = my_string.toLowerCase();
    let arr = small.split("");
    
    arr.sort();
    
    return arr.join("");
}