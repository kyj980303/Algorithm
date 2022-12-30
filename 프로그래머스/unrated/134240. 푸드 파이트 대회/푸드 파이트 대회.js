function solution(food) {
    let arr = [];
    let arr2 = [];
    let ans = "";
    
    for (let i = 0; i < food.length; i++) {
        arr.push(Math.floor(food[i] / 2));
    }
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            arr2.push(i);
        }
    }
    
    let reverse = arr2.slice().sort((a,b) => b - a);
    
    ans = arr2.join("") + 0 + reverse.join("");
    
    return ans;
}