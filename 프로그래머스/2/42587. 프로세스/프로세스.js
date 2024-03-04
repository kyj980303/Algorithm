function solution(priorities, location) {
    let max = Math.max(...priorities) // 우선순위가 가장 높은 값 구하기
    let count = 0 // 실행시킨 프로세스 수
    
    while(true) {
        // priorities 배열 맨 앞의 값을 뽑아 우선순위가 가장 높은 값과 비교한다.
        // 또한, 맨 앞 값을 뽑기 때문에 배열의 길이가 한 칸씩 땡겨지면서 location 값도 한 칸씩 땡긴다.
        let firstPriorities = priorities.shift()
        
        // 만약 우선순위가 가장 높은 값이면 프로세스를 실행시키고 아니라면 priorities 배열에 다시 push한다.   
        // 우선순위가 가장 높은 값이면서 location이 0이되면 실행된 프로세스의 수를 리턴한다. 
        if (firstPriorities === max) {
            count++
            if (location === 0) {
                return count
            } 
            max = Math.max(...priorities)
        } else {
            priorities.push(firstPriorities)
        }
        
        location = location === 0 ? priorities.length - 1 : location - 1
    }
}