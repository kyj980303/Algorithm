import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class AgeSort {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num = in.nextInt();
    String[][] arr = new String[num][2];

    for (int i = 0; i < num; i++) {
      arr[i][0] = in.next(); // 나이 입력받기
      arr[i][1] = in.next(); // 이름 입력받기
    }

    Arrays.sort(arr, new Comparator<String[]>() {
      public int compare (String[] s1, String[] s2) {
        return Integer.parseInt(s1[0]) - Integer.parseInt(s2[0]);
      }
      
    });

    for (int i = 0; i < num; i++) {
      System.out.println(arr[i][0] + " " + arr[i][1]);
    }

    in.close();

  }
}
