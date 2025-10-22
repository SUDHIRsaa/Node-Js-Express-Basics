package OOPS;

// Having multiple methods in the same class with the same name but different parameter lists (different number or type of parameters).

// 👉 Key Points:

// Happens within the same class.

// Must have different parameters (number or type).

// Can have different return types (but only if parameter list is different).

// Resolved at compile time → also called Compile-Time Polymorphism / Static Binding.

public class MethodOverloading {
    
}
class Calculator {
    // Overloaded methods
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(2, 3));        // calls int add(int, int)
        System.out.println(calc.add(2.5, 3.5));   // calls double add(double, double)
        System.out.println(calc.add(1, 2, 3));    // calls int add(int, int, int)
    }
}


