// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
import java.util.Scanner;

public class AddNum {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();
    int result = 0;
    String num2 = in.next();

    for (int i = 0; i < num; i++) {
      result += num2.charAt(i) - '0';
    }

    System.out.println(result);
    in.close();
  }
}

