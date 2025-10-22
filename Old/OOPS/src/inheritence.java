public class inheritence {
    public static void main(String[] args) {
        Dog d = new Dog();
    
    d.bark();
        d.eat();  // Inherited method
        d.bark(); // Dog-specific method
    }

}
class Animal {
    int a=0;
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}