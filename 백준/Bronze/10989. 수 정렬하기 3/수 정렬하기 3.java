
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) throws IOException {

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    int num = Integer.parseInt(br.readLine());
    int[] array = new int[num];


    for (int i = 0; i < num; i++) {
      array[i] = Integer.parseInt(br.readLine());
    }

    Arrays.sort(array);

    for (int i = 0; i < num; i++) {
      sb.append(array[i]).append('\n');
    }
    System.out.println(sb);

  }
}
