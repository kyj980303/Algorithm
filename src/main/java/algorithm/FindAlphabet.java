import java.util.Scanner;

public class FindAlphabet {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int[] arr = new int[26];
    for (int i = 0; i < arr.length; i++) {
      arr[i] = -1;
    }

    String s = in.nextLine();

    for (int i = 0; i < s.length(); i++) {

      char ch = s.charAt(i);

      if (arr[ch - 'a'] == -1) {
        arr[ch - 'a'] = i;
      }
    }

    for (int val : arr) {
      System.out.println(val + " ");
    }

  }
}
