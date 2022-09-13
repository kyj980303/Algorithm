
public class compare {
  public static void main(String[] args) {
    java.util.Scanner keyNum = new java.util.Scanner(System.in);

    int A = keyNum.nextInt();
    int B = keyNum.nextInt();

    if (A >= -10000 && A <= 10000) {
      if (B >= -10000 && B <= 10000) {
        if (A > B) {
          System.out.println(">");
        } else if (A < B) {
          System.out.println("<");
        } else {
          System.out.println("==");
        }
      }
    }
  }
}