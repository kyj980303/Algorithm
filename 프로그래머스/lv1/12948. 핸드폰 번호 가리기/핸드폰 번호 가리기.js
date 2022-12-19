function solution(phone_number) {
    let arr = phone_number.split("");
    let result = [];
    
    for (let i = 0; i < arr.length - 4; i++) {
        //arr.replace(arr[i], "*");
        result.push(arr[i].replace(arr[i], "*"));
    }
    for (let i = arr.length - 4; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result.join('');
}