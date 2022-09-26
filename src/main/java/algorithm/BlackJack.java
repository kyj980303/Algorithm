import java.util.Scanner;

public class BlackJack {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int N = in.nextInt();
    int M = in.nextInt();
    int[] num = new int[N];

    for (int i = 0; i < N; i++) {
      num[i] = in.nextInt();
    }

    int result = search(num, N, M);
    System.out.println(result);
    in.close();
  }

  static int search(int[] num, int N, int M) {
    int result = 0;

    for (int i = 0; i < N - 2; i++) {
      for (int j = i + 1; j < N - 1; j++) {
        for (int k = j + 1; k < N; k++) {
          int temp = num[i] + num[j] + num[k];

          if (temp == M) {
            return temp;
          }

          if (result < temp && temp < M) {
            result = temp; 
          }
        }
      }
    }
    return result;
  }
}
