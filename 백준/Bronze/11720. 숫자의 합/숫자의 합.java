import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();
    int result = 0;
    String num2 = in.next();

    for (int i = 0; i < num; i++) {
      result += num2.charAt(i) - '0';
    }

    System.out.println(result);
  }
}

