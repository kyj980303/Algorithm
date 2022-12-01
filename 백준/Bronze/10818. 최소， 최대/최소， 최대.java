import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner keyboard = new Scanner(System.in);
    int num = keyboard.nextInt();
    int[] len = new int[num];

    for (int i = 0; i < num; i++) {
      len[i] = keyboard.nextInt();
    }

    int max = -9999999;
    int min = 9999999;

    for (int i = 0; i < num; i++) {

      if (len[i] > max) {
        max = len[i];
      }

      if (min > len[i]) {
        min = len[i];
      }

    }

    System.out.println(min);
    System.out.println(max);
  }
}