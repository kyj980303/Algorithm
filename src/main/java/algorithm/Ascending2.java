// 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다. 

import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;



public class Ascending2 {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();
    
    int num = Integer.parseInt(br.readLine());
    int[] arr = new int[num];

    for (int i = 0; i < num; i++) {
      arr[i] = Integer.parseInt(br.readLine());
    }

    Arrays.sort(arr);

    for (int i = 0; i < num; i++) {
      sb.append(arr[i]).append('\n');
    }
    
    System.out.println(sb);

  }
}
