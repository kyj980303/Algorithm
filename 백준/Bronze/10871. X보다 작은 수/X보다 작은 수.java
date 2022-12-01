import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();
    int x = in.nextInt();

    for(int i = 0; i < num; i++) {

      int num2 = in.nextInt();
      if (num2 < x) {
        System.out.print(num2 + " ");
      }
    }
  }
}
