import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class ApiExample {
    public static void main(String[] args) throws Exception {
        String apiKey = System.getenv("MY_API_KEY"); // set MY_API_KEY in env; do NOT hardcode secrets

        if (apiKey == null || apiKey.isBlank()) {
            System.out.println("Warning: MY_API_KEY not set.");
            // fallback: prompt the user for a key for this run (optional)
            System.out.print("Enter API key (or press Enter to continue without): ");
            Scanner s = new Scanner(System.in);
            String input = s.nextLine().trim();
            if (!input.isBlank()) {
                apiKey = input;
            }
            // do not call s.close() if you need System.in elsewhere
        }

        String url = System.getenv("API_URL");
        if (url == null || url.isBlank()) {
            url = "https://httpbin.org/get"; // fallback public endpoint for testing
        }

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest.Builder reqBuilder = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .GET();

        if (apiKey != null && !apiKey.isBlank()) {
            reqBuilder.header("Authorization", "Bearer " + apiKey);
        }

        HttpRequest request = reqBuilder.build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println("Status: " + response.statusCode());
        System.out.println(response.body());
    }
}