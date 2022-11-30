import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner keyNum = new Scanner(System.in);

    int A = keyNum.nextInt();
    int B = keyNum.nextInt();
      
    if (A > B) {
      System.out.println(">");
    } else if (A < B) {
      System.out.println("<");
    } else {
      System.out.println("==");
    }
  }
}