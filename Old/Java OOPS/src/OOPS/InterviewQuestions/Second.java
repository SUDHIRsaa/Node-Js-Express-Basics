package OOPS.InterviewQuestions;

// 2)
// What about two main methods in the same class?

// 👉 Not possible with the same method signature.
// This would give a compile-time error (duplicate method).

public class Second {
    public static void main(String[] args) {
        System.out.println("Main with String[] args");
        main(10); // calling overloaded main
    }

    public static void main(int x) {
        System.out.println("Overloaded main with int: " + x);
    }
}

