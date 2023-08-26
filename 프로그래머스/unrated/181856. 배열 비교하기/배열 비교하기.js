function solution(arr1, arr2) {
    if (arr1.length < arr2.length) {
        return -1
    } else if (arr1.length === arr2.length) {
        let a = 0
        let b = 0
        for (let i = 0; i < arr1.length; i++) {
            a += arr1[i]
            b += arr2[i]
        }
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else {
            return 0
        }
    } else {
       return 1
    }
}