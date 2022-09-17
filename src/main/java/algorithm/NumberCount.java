import java.util.Scanner;

public class NumberCount {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int num1 = in.nextInt();
    int num2 = in.nextInt();
    int num3 = in.nextInt();

    String result = Integer.toString(num1 * num2 * num3);

    int[] arr = new int[10];

    for (int j = 0; j < result.length(); j++) {

      for (int i = 0; i < arr.length; i++) {

        if ((result.charAt(j) - '0') == i) {
          arr[i]++;
        }
      }
    }

    for (int ar : arr) {
      System.out.println(ar);
    }
    in.close();
  }
}


// 1. 숫자 세개 받아서 곱하기
// 2. 곱한 결과를 문자로 바꾸기
// 3-0. 0~9가 몇개씩 있는지 센 결과를 저장할 10칸짜리 배열 만들기
// 3-1. 문자의 0번째부터 끝까지 0~9가 몇개씩 있는지세기
