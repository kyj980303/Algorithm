
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		Queue<Integer> q = new LinkedList<Integer>();

		int N = Integer.parseInt(br.readLine());
		int num = 0;

		for (int i = 0; i < N; i++) {

			StringTokenizer st = new StringTokenizer(br.readLine());
			String s = st.nextToken();

			switch(s) {

			case "push" : 
				num = Integer.parseInt(st.nextToken());
				q.offer(num);
				break;

			case "pop" :
				if (q.isEmpty()) sb.append(-1).append("\n");
				else sb.append(q.poll()).append("\n");
				break;

			case "size" :
				sb.append(q.size()).append("\n");
				break;

			case "empty" :
				if (q.isEmpty()) sb.append(1).append("\n");
				else sb.append(0).append("\n");
				break;

			case "front" :
				if (q.isEmpty()) sb.append(-1).append("\n");
				else sb.append(q.peek()).append("\n");
				break;

			case "back" :
				if (q.isEmpty()) sb.append(-1).append("\n");
				else sb.append(num).append("\n");
				break;
			}

		}
		
		System.out.println(sb);
	}
}
