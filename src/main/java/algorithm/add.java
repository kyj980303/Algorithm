// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

import java.util.Scanner;

public class add {
  public static void main(String[] args) {

    Scanner num = new Scanner(System.in);
    int first = num.nextInt();
    int second = num.nextInt();
    if (first > 0 && first < 10) {
      if(second > 0 && second < 10){
        int sum = first + second;
        System.out.println(sum);
      }
    }
  }
}
