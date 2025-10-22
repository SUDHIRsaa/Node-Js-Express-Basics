public class Multiple{
    public static void main(String[] args) {
        C obj = new C();
        obj.show();    // From A
        obj.display(); // From B
    }
}

interface A {
    void show();
}

interface B {
    void display();
}

class C implements A, B {
    @Override
    public void show() {
        System.out.println("From A");
    }

    @Override
    public void display() {
        System.out.println("FroB");
    }
}
