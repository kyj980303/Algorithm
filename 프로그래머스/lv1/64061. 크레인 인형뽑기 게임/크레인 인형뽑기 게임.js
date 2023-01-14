function solution(board, moves) {
  var answer = 0;
  // board 이차원 배열 깊은 복사
  let list = board.map((v) => v.slice());
  // 뽑힌 인형을 담을 바구니 준비
  let stack = [];
    
  for (let i = 0; i < moves.length; i++) {
    //배열의 인덱스 0부터 고려
    let n = moves[i] - 1;
      
    for (let j = 0; j < list.length; j++) {
      //배열에 인형이 있을시
      if (list[j][n] !== 0) {
        //바구니 마지막값이 현재 인형과 같다면
        if (stack[stack.length - 1] === list[j][n]) {
          answer += 2;
          stack.pop();
        }
        //다르면 인형 삽입
        else {
          stack.push(list[j][n]);
        }
          
        //뽑은 인형 처리후, 해당 배열 탐색 종료
        list[j][n] = 0;
        break;
      }
    }
  }
  return answer;
}