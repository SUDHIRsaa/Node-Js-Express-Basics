public class Interface {
    public static void main(String[] args) {
        EnglishGreeting greeting = new EnglishGreeting();
        greeting.sayHello();
    }
}
interface A {
    void sayHello();
}
interface B {
    void sayHello();
}

// also explains Multiple Inheritance
class EnglishGreeting implements A,B {
    
    public void sayHello() {
        System.out.println("Hello!");
    }
}