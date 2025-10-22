public class Classes {
    public static void main(String[] args) {
        A a=new B();
        a.print();  
    }
    
}

class A{
    int ab=10;
    void print() {
        System.out.println("A");
    }
    void A(){
        System.out.println("A is a constructor");
    }
   
    
    
}
class B extends A{
    int b=10;
     B(){
        System.out.println("B is a constructor");
    }
     void print() {
        System.out.println("B");
        A();  
        
        
    }
}
class C extends B{
    int c=10;
    
     public C(int c) {
        this.c = c;
    }

     void print() {
        System.out.println("C");
    }

}