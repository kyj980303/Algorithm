import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    while (true) {
      String S = br.readLine();
      StringBuilder sb = new StringBuilder(S);
      String Sreverse = sb.reverse().toString();

      if (S.equals("0")) break;

      if (S.equals(Sreverse)) {
        System.out.println("yes");
      } else {
        System.out.println("no");
      }
    }
  }
}
