// ...existing code...
import java.util.Scanner;

public class AgeScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your age: ");
        while (true) {
            String line = scanner.nextLine().trim();
            try {
                int age = Integer.parseInt(line);
                if (age < 0) {
                    System.out.print("Age cannot be negative. Enter your age: ");
                    continue;
                }
                System.out.println("You are " + age + " years old.");
                break;
            } catch (NumberFormatException e) {
                System.out.print("Invalid input. Please enter a whole number: ");
            }
        }
        scanner.close();
    }
}