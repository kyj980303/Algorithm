import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();

    while (num > 0) { 
      System.out.println(num);
      num--;
    }
  }
}
