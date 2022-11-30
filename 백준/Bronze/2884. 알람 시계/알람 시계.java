import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int time = in.nextInt();
    int min = in.nextInt();
    int minute = 0;


    if (min >= 45 && min < 60) {
      minute = min - 45;

      System.out.printf("%d %d", time, minute);
    } else {

      if (time == 0) {
        time = 24;
      }

      minute = min + 15;
      --time;

      System.out.printf("%d %d", time, minute);
    }

  }  
}