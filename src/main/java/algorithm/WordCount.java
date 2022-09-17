
import java.util.Scanner;


public class WordCount {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String str = in.nextLine();

    int count = 1;

    if (str.charAt(0) == ' ') {
      --count;
    }

    if (str.charAt(str.length() - 1) == ' ') {
      --count;
    }

    for (int i = 0; i < str.length(); i++) {
      if (str.charAt(i) == ' ') {
        count++;
      }
    }
    System.out.println(count);
    in.close();
  }
}
