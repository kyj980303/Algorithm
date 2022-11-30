import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner keyboard = new Scanner(System.in);
    int N = keyboard.nextInt();
    int[] score = new int[N];

    for (int i = 0; i < N; i++) {
      score[i] = keyboard.nextInt();
    }

    int M = 0;
    double sum = 0;

    for (int i = 0; i < N; i++) {
      if (M < score[i]) {
        M = score[i];
      }
    }

    for (int i = 0; i < N; i++) {
      sum += (double)score[i] / (double)M * 100;
    }

    double aver = sum / N;
    System.out.println(aver);
  }
}