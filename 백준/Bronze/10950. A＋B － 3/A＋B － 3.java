import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner in = new Scanner(System.in);
    int num = in.nextInt();
    int[] arr = new int[num];

    int result = 0;

    for (int i = 0; i < num; i++) {

      int num2 = in.nextInt();
      int num3 = in.nextInt();

      arr[i] = num2 + num3;

    }
    for (int k : arr) {
      System.out.println(k);
    }

  }
}
