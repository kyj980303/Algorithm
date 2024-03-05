function solution(sizes) {
    let result = 0;
    let sortSizes = [] 
    let first = []
    let secound = []
    
    // sizes 배열에서 원소(배열) 하나씩 꺼내서 오름차순 정렬한다.
    for (let i = 0; i < sizes.length; i++) {
        sortSizes.push(sizes[i].sort((a, b) => a - b))
    }
    
    // 원소의 0번쨰와 1번쨰를 각각 뽑아 새 배열에 담는다.
    for (let i = 0; i < sortSizes.length; i++) {
        first.push(sortSizes[i][0])
        secound.push(sortSizes[i][1])
    }
    
    // 원소의 0번째 중 가장 큰 수와 1번째 중 가장 큰 수를 구해 곱한다.
    result = Math.max(...first) * Math.max(...secound)
    return result
}