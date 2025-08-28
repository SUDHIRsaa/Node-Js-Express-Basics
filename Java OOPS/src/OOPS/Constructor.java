package OOPS;

public class Constructor {
    
}
class Student {
    String name;
    int age;

    // 1. Default Constructor
    Student() {
        name = "Unknown";
        age = 0;
        System.out.println("Default constructor called");
    }

    // 2. Parameterized Constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Parameterized constructor called");
    }

    // 3. Copy Constructor (User-defined)
    Student(Student other) {
        this.name = other.name;
        this.age = other.age;
        System.out.println("Copy constructor called");
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    // Driver method
    public static void main(String[] args) {
        // Default constructor
        Student s1 = new Student();
        s1.display();

        // Parameterized constructor
        Student s2 = new Student("Alice", 21);
        s2.display();

        // Copy constructor
        Student s3 = new Student(s2);
        s3.display();
    }
}

