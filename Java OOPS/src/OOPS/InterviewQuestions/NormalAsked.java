package OOPS.InterviewQuestions;

public class NormalAsked {
    // instance variables
    int a;
    int b;
    float f;
    String name;

    // static variables
    public static String staticVar;
    public static void main(String[] args) {
        NormalAsked nn=new NormalAsked();

        System.out.println(nn); 
        // gives default values
        System.out.println("a: " + nn.a);
        System.out.println("b: " + nn.b);
        System.out.println("f: " + nn.f);
        System.out.println("name: " + nn.name);

        nn.a=10;
        nn.b=20;
        nn.name="Geeks";
        System.out.println(nn);
        // gives updated values
        System.out.println("a: " + nn.a);
        System.out.println("b: " + nn.b);
        System.out.println("name: " + nn.name);

    }
}
