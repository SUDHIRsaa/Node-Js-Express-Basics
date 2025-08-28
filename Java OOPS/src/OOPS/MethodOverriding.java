package OOPS;

// When a subclass provides a specific implementation of a method that is already defined in its parent class, using the same method signature (same name, parameters, and return type).

// 👉 Key Points:

// Happens across classes (Inheritance).

// Must have the same signature (same name + parameters + return type).

// Access modifier in child must be the same or more permissive.

// @Override annotation is used (not mandatory, but recommended).

// Resolved at runtime → also called Runtime Polymorphism / Dynamic Binding.


public class MethodOverriding {
    
}

class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

 class Main {
    public static void main(String[] args) {
        Animal a = new Dog(); // upcasting
        a.sound(); // Runtime decision → "Dog barks"
    }
}
