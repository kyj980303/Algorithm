import java.util.Scanner;

public class StringRepeat {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();

    for (int i = 0; i < num; i++) {

      int r = in.nextInt();
      String s = in.next();

      for (int k = 0; k < s.length(); k++) {

        for (int j = 0; j < r; j++) {

          System.out.print(s.charAt(k));
        }
      }

      System.out.println();
    } 
    
    in.close();
    }
}
