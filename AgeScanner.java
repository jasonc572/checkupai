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
                System.out.println();
                System.out.println(getRecommendations(age));
                break;
            } catch (NumberFormatException e) {
                System.out.print("Invalid input. Please enter a whole number: ");
            }
        }
        scanner.close();
    }

    private static String getRecommendations(int age) {
        StringBuilder sb = new StringBuilder();
        sb.append("General health check-up recommendations:\n");

        if (age < 18) {
            sb.append("- Routine pediatric visits and vaccinations (follow local schedule).\n");
            sb.append("- Dental check-ups every 6-12 months.\n");
            sb.append("- Vision and developmental screenings as advised.\n");
        } else if (age <= 29) {
            sb.append("- Periodic physical exam every 1-3 years (more often if chronic conditions).\n");
            sb.append("- Blood pressure check and basic blood tests as advised.\n");
            sb.append("- Sexual health screenings if sexually active; routine dental and vision checks.\n");
        } else if (age <= 39) {
            sb.append("- Blood pressure and cholesterol baseline; discuss diabetes screening if risk factors present.\n");
            sb.append("- Skin check for suspicious moles; cervical cancer screening for people with a cervix as recommended.\n");
            sb.append("- Maintain dental and vision exams.\n");
        } else if (age <= 49) {
            sb.append("- Regular blood pressure and cholesterol monitoring; consider diabetes screening.\n");
            sb.append("- Discuss breast cancer screening with provider (mammography per guidelines/risks).\n");
            sb.append("- Discuss colorectal cancer screening (many guidelines suggest starting around 45).\n");
        } else if (age <= 64) {
            sb.append("- Colonoscopy or other colorectal screening as recommended.\n");
            sb.append("- Routine screening for blood pressure, cholesterol, and diabetes.\n");
            sb.append("- Women: mammograms and cervical screening as recommended.\n");
            sb.append("- Stay current with vaccines (influenza, shingles when eligible, etc.).\n");
        } else { // 65+
            sb.append("- Annual wellness visit and medication review.\n");
            sb.append("- Vaccinations: influenza yearly, pneumococcal, shingles (per schedule).\n");
            sb.append("- Bone density screening (discuss with provider) and vision/hearing checks.\n");
            sb.append("- Continue colorectal and cancer screenings per prior results and guidelines.\n");
        }

        sb.append("\nNote: This is general information and not medical advice. Consult a healthcare professional for personalized recommendations.");
        return sb.toString();
    }
}