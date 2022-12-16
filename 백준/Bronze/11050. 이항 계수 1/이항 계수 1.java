import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 이항계수 공식 : nCk =     n!
//                    __________
//                    (n - k)!k!

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());


		// 분모
		int denominator = factorial(N - K) * factorial(K); 
		// 분자 
		int molecule = factorial(N);

		System.out.println(molecule / denominator); 
	}

	public static int factorial(int num) {
		int multi = 1;
		for (int i = num; i >= 1; i--) {
			multi *= i; 
		}
		return multi;
	}
}
