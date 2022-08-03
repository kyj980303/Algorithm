// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
// 1부터 n까지 합을 출력한다.

import java.util.Scanner;

public class Add2 {
  public static void main(String[] args) {
    System.out.print("숫자를 입력해주세요 : ");
    Scanner keyboardNo = new Scanner(System.in);
    int n = keyboardNo.nextInt();

    int result = 0;

    if (n >= 1 && n <= 10000) {
      for (int i = 1; i <= n; i++) {
        result += i;
      }
      System.out.println(result);
    }
    keyboardNo.close();
  }
}