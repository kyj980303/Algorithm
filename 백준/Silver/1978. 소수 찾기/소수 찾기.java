import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();
    int count = 0;

    for (int i = 0; i < num; i++) {

      boolean isPrime = true;

      int N = in.nextInt();

      if (N == 1) {
        continue;
      } 
      for (int j = 2; j <= Math.sqrt(N); j++) {
        if (N % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
    System.out.println(count);
  }

}