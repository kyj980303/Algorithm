
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner in = new Scanner(System.in);

    int[][] apt = new int[15][15];

    for (int i = 0; i < 15; i++) {
      apt[i][1] = 1; // i층 1호
      apt[0][i] = i; // 0층 i호
    }

    // 1층부터 14층까지
    for (int i = 1; i < 15; i++) {

      // 2호부터 14호까지
      for (int j = 2; j < 15; j++) {
        apt[i][j] = apt[i][j - 1] + apt[i - 1][j];
      }
    }

    int test = in.nextInt();

    for (int i = 0; i < test; i++) {
      int k = in.nextInt();
      int n = in.nextInt();
      System.out.println(apt[k][n]);
    }

  }
}







