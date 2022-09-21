import java.util.Scanner;

public class Triangle {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    while (in.hasNextInt()) {

      int a = in.nextInt();
      int b = in.nextInt();
      int c = in.nextInt();

      if (a == 0 && b == 0 && c == 0) {
        break;

      } else {
        triangle(a, b, c);
      }

    }
    in.close();
  }

  static void triangle(int a, int b, int c) {

    int a2 = a * a;
    int b2 = b * b;
    int c2 = c * c;

    if (a2 == b2 + c2 || b2 == a2 + c2 || c2 == a2 + b2) {
      System.out.println("right");
      return;

    } else {
      System.out.println("wrong");
      return;

    }
  }
}

