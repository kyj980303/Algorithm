function solution(sides) {
    let arr = sides.sort(function(a, b) {return a - b});
    console.log(sides.sort(function(a, b) {return a - b}));
    if (arr[2] < (arr[0] + arr[1])) {
        return 1;
    } else {
        return 2;
    }
  }