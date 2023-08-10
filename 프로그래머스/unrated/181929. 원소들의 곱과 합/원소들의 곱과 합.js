function solution(num_list) {
    var answer = 0;
    let multi = 1;
    let sum = 0;
    let square = 0;
    
    for (let i = 0; i < num_list.length; i++ ){
        multi *= num_list[i]
        sum += num_list[i]
        square = sum * sum
    }
    
    if (multi < square) {
        return 1
    } else {
        return 0
    }
}