//Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Random;

public class ArrayShuffler {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        
        // Print the shuffled array
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);

            // Swap array[i] and array[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

//Enter a Roman Number as input and convert it to an integer. (ex IX = 9)

public class RomanToInteger {
    public static int romanToInt(String s) {
        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue = romanCharToInt(currentChar);

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static int romanCharToInt(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0; // Invalid character
        }
    }

    public static void main(String[] args) {
        String romanNumeral = "IX";
        int result = romanToInt(romanNumeral);
        System.out.println(romanNumeral + " = " + result);
    }
}

// Check if the input is pangram or not. Pangram is a sentence that contains all the alphabet from a-z.

public class PangramChecker {
    public static boolean isPangram(String str) {
        
        boolean[] isAlphabetPresent = new boolean[26];

        
        str = str.toLowerCase();

        
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                
                isAlphabetPresent[ch - 'a'] = true;
            }
        }

        
        for (boolean isPresent : isAlphabetPresent) {
            if (!isPresent) {
                return false; 
            }
        }

        return true; 
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean result = isPangram(input);
        if (result) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
