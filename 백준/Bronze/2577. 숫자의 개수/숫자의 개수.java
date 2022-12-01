import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num1 = in.nextInt();
    int num2 = in.nextInt();
    int num3 = in.nextInt();

    String result = Integer.toString(num1 * num2 * num3);

    int[] arr = new int[10];

    for (int j = 0; j < result.length(); j++) {

      for (int i = 0; i < arr.length; i++) {

        if ((result.charAt(j) - '0') == i) {
          arr[i]++;
        }
      }
    }

    for (int ar : arr) {
      System.out.println(ar);
    }
  }
}