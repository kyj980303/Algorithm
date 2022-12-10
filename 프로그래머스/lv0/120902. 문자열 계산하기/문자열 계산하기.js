function solution(my_string) {
    const arr = my_string.split(" ");
    
    let first = Number(arr[0]);
    
    arr.forEach((item, index) => {
        if(item === "+"){
            first += Number(arr[index + 1]);
        }
        
        if(item === "-"){
            first -= Number(arr[index + 1]);
        }
    })
    
    return first;
    
}