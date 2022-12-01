import java.util.Arrays;
import java.util.Scanner;

public class Main {   
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();
    int[][] arr = new int[num][2];

    for (int i = 0; i < num; i++) {
      arr[i][0] = in.nextInt();
      arr[i][1] = in.nextInt();
    }

    Arrays.sort(arr, (i1, i2) -> {
      if (i1[1] == i2[1]) {
        return i1[0] - i2[0];
      } else {
        return i1[1] - i2[1];
      }
    });

    for (int i = 0; i < num; i++) {
      System.out.println(arr[i][0] + " " + arr[i][1]);
    }

  }
}
