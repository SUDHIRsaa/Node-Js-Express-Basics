package OOPS.InterviewQuestions;

// 1)
// Can we have two main methods in one file?

//  Yes, we can.
// A single Java source file (.java) can contain multiple classes, and each class can have its own main method.

// But at runtime, the JVM will only execute the main method of the class you specify with java ClassName.

// So, you can’t have two main methods executed at the same time automatically, but you can choose which one to run.

public class First {
    public static void main(String[] args) {
        System.out.println("Main of First class");
    }
}

class Second {
    public static void main(String[] args) {
        System.out.println("Main of Second class");
    }
}




