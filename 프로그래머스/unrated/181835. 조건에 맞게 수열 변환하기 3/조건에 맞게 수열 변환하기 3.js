function solution(arr, k) {
    let answer = []
    if (k % 2 === 0) {
        arr.map((item) => answer.push(item + k))
    } else {
        arr.map((item) => answer.push(item * k))
    }
    return answer
}