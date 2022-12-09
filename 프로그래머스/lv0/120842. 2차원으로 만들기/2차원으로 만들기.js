function solution(num_list, n) {
    let result = [];
    
    for (let i = 0; i < num_list.length; i += n) {
        const arr = num_list.slice(i, i + n);
        result.push(arr);
    } 
    return result
    
}