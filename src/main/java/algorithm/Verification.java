import java.util.Scanner;

public class Verification {
  public static void main(String[] args) {

    Scanner keyboard = new Scanner(System.in);

    int sum = 0;

    for (int i = 0; i < 5; i++) {

      int num = keyboard.nextInt();
      sum += num * num;
    }

    int ver = sum % 10;
    System.out.println(ver);
  }
}
