function solution(my_string) {
    let result = 0;
    for (let i = 0; i < my_string.length; i++) {
        let arr = '';
        while (!Number.isNaN(Number(my_string[i]))) {
            arr += my_string[i];
            i++;
        }
        result += +arr;
    }  
    return result;
}