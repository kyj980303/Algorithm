public class Main {
  public static void main(String[] args) {
    java.util.Scanner keyboardInput = new java.util.Scanner(System.in);
    int scoreNo = keyboardInput.nextInt();

    if (scoreNo <= 100 && scoreNo >= 90) {
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
  }
}