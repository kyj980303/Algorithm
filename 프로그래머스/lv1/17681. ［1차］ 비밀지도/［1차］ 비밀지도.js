function solution(n, arr1, arr2) {
    let ten1 = [];
    let ten2 = [];
    let result = [];
    let ans = [];
    
    // 10진수를 2진수로 변경
    for (let i = 0; i < n; i++) {
        ten1.push(arr1[i].toString(2));
        ten2.push(arr2[i].toString(2));
    }
    
    // 각각의 배열을 합쳐서 새로운 배열에 넣는다.
    for (let i = 0; i < n; i++) {
        result.push(Number(ten1[i]) + Number(ten2[i]));
    }
    
    // 들어있는 원소 하나하나를 뽑기위해 배열로 쪼캔다.
    result = String(result).split(',');
    let maxLength = String(Math.max(...result)).split("").length;
    
    console.log(maxLength);
    
    for (let i = 0; i < result.length; i++) {
        
        // 만약 2진수의 길이가 n과 다르다면 앞에 0을 추가해준다.
        while (result[i].length != maxLength) {
            result[i] = 0 + result[i];
            console.log(result[i]);
        }
        
        // 임시로 담을 배열준비
        let temp = [];
        
        for (let j = 0; j < result[i].length; j++) {
            // 만약 원소가 0이 아니라면 빈어있는 temp 배열에 #을 추가한다.
            if(result[i][j] != 0) {
                temp.push("#");
            } else {
                // 0이라면 빈 공간을 추가한다.
                temp.push(" ")
            }
        }
        
        // 하나의 배열 조사가 끝나면 ans라는 빈 배열안에 담는다.
        ans.push(temp.join(""));
    }
    
    console.log(result);
    return ans;
}