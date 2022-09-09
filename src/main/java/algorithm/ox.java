
import java.util.Scanner;

public class ox {
  public static void main(String[] args) {  
    Scanner keyboard = new Scanner(System.in);

    String[] str = new String[keyboard.nextInt()];

    for (int i = 0; i < str.length; i++) {
      str[i] = keyboard.next();
    }

    for (int i = 0; i < str.length; i++) {
      calculate(str[i]);
    }
  }

  static void calculate(String str) {

    int result = 0;
    int a = 0;
    int b =1;

    for (int i = 0; i <str.length(); i++) {

      if(str.charAt(i) == 'O') {
        a += b;
        b++;
      }

      if((str.charAt(i) == 'X') || (i == str.length() -1)) {
        result += a;
        a = 0;
        b = 1;
      }
    }

    System.out.println(result);
  }
}