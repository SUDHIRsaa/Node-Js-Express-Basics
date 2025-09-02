public class HierarchicalInheritance {
    public static void main(String[] args) {
        C obj = new C();
        obj.display(); // From A
        obj.show(); // From B
        obj.print(); // From C
    }
}

class A {
    void display() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        System.out.println("B");
    }
}

class C extends B {
    void print() {
        System.out.println("C");
    }
}
