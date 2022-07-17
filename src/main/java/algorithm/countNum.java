// 숫자 1에서 10까지 숫자 탑 출력하기

public class countNum {
  public static void main(String[] args) {
    for(int i = 1; i <= 10; i++) {
      for(int j = 1; j <= i; j++) {
        System.out.print(j + " ");
      }
      System.out.println();
    }
  }
}