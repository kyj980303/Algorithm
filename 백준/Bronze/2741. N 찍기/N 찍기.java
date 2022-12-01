import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner keyboard = new Scanner(System.in);

    int num = keyboard.nextInt();

    for (int i = 1; i <= num; i++) {
      System.out.println(i);
    }
  }
}
