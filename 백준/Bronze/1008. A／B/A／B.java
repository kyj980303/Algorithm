import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner num = new Scanner(System.in);
    double first = num.nextInt();
    double second = num.nextInt();
    if (first > 0 && first < 10) {
      if(second > 0 && second < 10){
        double div = first / second;
        System.out.println(div);
      }
    }
  }
}