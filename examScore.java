// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

public class examScore {
  public static void main(String[] args) {
    java.util.Scanner keyboardInput = new java.util.Scanner(System.in);

    System.out.println("시험 점수를 입력해주세요 : ");
    int scoreNo = keyboardInput.nextInt();
    
    if (scoreNo <= 100  && scoreNo >= 90) {
      System.out.println("A");
    } else if (scoreNo < 90  && scoreNo >= 80) {
      System.out.println("B");
    } else if (scoreNo < 80  && scoreNo >= 70) {
      System.out.println("C");
    } else if (scoreNo < 70  && scoreNo >= 60) {
      System.out.println("D");
    } else if (scoreNo < 60) {
      System.out.println("F");
    }
    keyboardInput.close();
  }
}