import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class WordSort {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    int num = Integer.parseInt(br.readLine());
    String[] arr = new String[num];

    for (int i = 0; i < num; i++) {
      arr[i] = br.readLine();
    }

    Arrays.sort(arr, new Comparator<String>() {
      // compare 메소드는 원소개수를 비교(-)하여 그 리턴값이 양수인지 음수인지에 따라 배열 순서를 바꾸어준다.
      public int compare(String s1, String s2) {
        // 만약 원소의 개수가 같다면
        if (s1.length() == s2.length()) {
          // compareTo는 사전순으로 비교해준다.
          return s1.compareTo(s2);
        } else {
          return s1.length() - s2.length();
        }
      }
    });

    sb.append(arr[0]).append('\n');

    for (int i = 1; i < num; i++) {
      // 같은 원소일 경우 중복제외
      if (!arr[i].equals(arr[i-1])) {
        sb.append(arr[i]).append('\n');
      }
    }
    System.out.println(sb);
  }
}
