// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.
// -10,000 ≤ A, B ≤ 10,000

public class compare {
  public static void main(String[] args) {
    java.util.Scanner keyNum = new java.util.Scanner(System.in);

    String num = keyNum.nextLine();
    String[] splitNum = num.split("\\s+");
    int A = Integer.parseInt(splitNum[0]);
    int B = Integer.parseInt(splitNum[1]);

    if (A >= -10000 && A <= 10000) {
      if (B >= -10000 && B <= 1000) {
        if (A > B) {
          System.out.println(" > ");
        } else if (A < B) {
          System.out.println(" < ");
        } else {
          System.out.println(" = ");
        }
      }
    }
  }
}
