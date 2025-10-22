package OOPS;



// 🔹 What is Constructor Overloading?

// Constructor Overloading means having multiple constructors in the same class, with the same name (class name) but different parameter lists.

// The compiler decides which constructor to call based on the arguments you pass when creating the object.

// 🔹 Rules

// Constructors must have the same name as the class.

// They must differ in the number or type of parameters.

// You cannot overload just by changing the return type (constructors have no return type).

public class ConstructorOverloading {
    
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

    // 2. Parameterized Constructor (1 parameter)
    Student(String name) {
        this.name = name;
        this.age = 0; // default value
        System.out.println("Constructor with 1 parameter called");
    }

    // 3. Parameterized Constructor (2 parameters)
    Student(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Constructor with 2 parameters called");
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    public static void main(String[] args) {
        // Calls default constructor
        Student s1 = new Student();
        s1.display();

        // Calls constructor with 1 parameter
        Student s2 = new Student("Alice");
        s2.display();

        // Calls constructor with 2 parameters
        Student s3 = new Student("Bob", 22);
        s3.display();
    }
}
