// 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, 
// x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

import java.util.Arrays;
import java.util.Scanner;

public class Coordinate {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();
    int[][] arr = new int[num][2];

    for (int i = 0; i < num; i++) {
      arr[i][0] = in.nextInt();
      arr[i][1] = in.nextInt();
    }

    Arrays.sort(arr, (i1, i2) -> {
      if (i1[0] == i2[0]) {
        return i1[1] - i2[1];
      } else {
        return i1[0] - i2[0];
      }
    });

    for (int i = 0; i < num; i++) {
      System.out.println(arr[i][0] + " " + arr[i][1]);
    }

    in.close();
  }
}
