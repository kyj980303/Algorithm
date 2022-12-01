import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    while (true) {

      int num1 = in.nextInt();
      int num2 = in.nextInt();
      if (num1 == 0 && num2 == 0) {
        in.close();
        break;
      }
      System.out.println(num1 + num2);
    }
  }
}
