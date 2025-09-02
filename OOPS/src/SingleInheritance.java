public class SingleInheritance {
    public static void main(String[] args) {
        B obj = new B();
        obj.display(); // From A
        obj.show(); // From B
    }
}

class A {
    void display() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        System.out.println("CCCCC");
    }
}
