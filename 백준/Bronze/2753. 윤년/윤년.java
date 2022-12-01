public class Main {
  public static void main(String[] args) {
    java.util.Scanner keyboardInput = new java.util.Scanner(System.in);
    int year = keyboardInput.nextInt();

    if (year >= 1 & year <= 4000) {
      int y;
      if (year % 4 == 0 & year % 100 != 0) {
        y = 1;
      } else if (year % 400 == 0) {
        y = 1;
      } else {
        y = 0;
      }
      System.out.println(y);
    }
    keyboardInput.close();
  }
}