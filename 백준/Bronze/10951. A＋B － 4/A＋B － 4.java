import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    while (in.hasNextInt()) {

      int num1 = in.nextInt();
      int num2 = in.nextInt();

      System.out.println(num1 + num2);
    } 
    in.close();
  }
}
