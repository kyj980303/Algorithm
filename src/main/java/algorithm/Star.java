import java.util.Scanner;

public class Star {
  public static void main(String[] args) {

    Scanner keyboard = new Scanner(System.in);
    int num = keyboard.nextInt();

    for (int i = 1; i <= num; i++) {

      for (int j = 1; j <= i; j++) {

        System.out.print("*");
      }

      System.out.println("");
    }
  }
}