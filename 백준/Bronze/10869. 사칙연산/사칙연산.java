import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner in = new Scanner(System.in);
    int firstNo = in.nextInt();
    int secondNo = in.nextInt();

    int plus = firstNo + secondNo;
    int minus = firstNo - secondNo;
    int multiple = firstNo * secondNo;
    int divide = firstNo / secondNo;
    int remainder = firstNo % secondNo;

    System.out.println(plus);
    System.out.println(minus);
    System.out.println(multiple);
    System.out.println(divide);
    System.out.println(remainder);
  }
}
