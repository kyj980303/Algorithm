// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오.
// 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.
// 출력형식과 같게 N*1부터 N*9까지 출력한다.

import java.util.Scanner;

public class Gugudan {
  public static void main(String[] args) {
    System.out.println("출력하고 싶은 단을 입력해주세요 : ");
    Scanner keyScanner = new Scanner(System.in);
    int N = keyScanner.nextInt();

    if (N >= 1 && N <= 9) {
      for (int i = 1; i <= 9; i++) {
        int result = N * i;
        System.out.println(N + "*" + i + "=" + result);
      }
    }
    keyScanner.close();
  }
}
