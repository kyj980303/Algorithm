import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    Scanner in2 = new Scanner(System.in);

    int x = in.nextInt();
    int y = in.nextInt();
    int w = in.nextInt();
    int h = in.nextInt();
    int[] arr = new int[4];

    int len = 1000;

    arr[0] = w - x;
    arr[1] = h - y;
    arr[2] = x;
    arr[3] = y;

    for (int i = 0; i < 4; i++) {
      if (arr[i] < len ) {

        len = arr[i];
      }
    }
    System.out.println(len);

  }
}
