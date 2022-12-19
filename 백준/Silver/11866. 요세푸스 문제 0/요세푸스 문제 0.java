
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner keyboard = new Scanner(System.in);

		int N = keyboard.nextInt();
		int K = keyboard.nextInt();
		int[] arr = new int[N]; 

		Queue<Integer> q = new LinkedList<>(); // 선입선출

		for (int i = 1; i <= N; i++) {
			q.offer(i);
		}

		StringBuilder sb = new StringBuilder();
		sb.append('<');

		while(q.size() > 1) {
			for (int i = 0; i < K - 1; i++) {
				int val = q.poll(); // K번째 바로 전까지 제거한다. 
				q.offer(val); // 제거한 값을 q의 마지막에 추가한다.
			}
			sb.append(q.poll()).append(", "); // 맨 앞 숫자를 제거하고 남은 숫자를 출력
		}
		
		sb.append(q.poll()).append('>');
		System.out.println(sb);
		keyboard.close();
	}

}