function solution(n) {
    let sum = 0;
    let op = 0;
    let x = 1;
    let count = 0;
    
    while (sum < n) {
      if ((n - sum) % x == 0) {
        count++;
      }
      op++;
      sum += op;
      x++;
    }

   return count;
}

