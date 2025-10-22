package OOPS;

public class stat {
    // static variable
    static int count=0;
    static int i=0;
    int j=0;
    static {
        System.out.println("Static block executed");
        
    }

    // static method
    public static void main(String[] args) {

        // static method can directly call another static method
        m1();

        // Error: non-static method mm() cannot be referenced from a static context
        // mm();
        stat s=new stat();
        s.mm();
        s.m2();

        System.out.println(count);

    }

    public static void m1(){
        // static variable can also be accessed in static method
        count++;
        System.out.println("Countm1: " + count);
    }
    // non-static method
    public void mm(){

        // static variable can be accessed in non-static method it will not give an error
        count++;
        System.out.println("Countmm: " + count);
    }

    public void m2(){
        System.out.println("j: " + count);
    }
}
