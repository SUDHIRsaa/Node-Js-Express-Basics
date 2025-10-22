public  class hello{
    void show(){
        System.out.println("hello");
    }
    public static void main(String[] args) {
        ho h=new ho();
        h.show();
    }
}
class ho extends hello{
    @Override
    public  void show(){
        System.out.println("he");
    }
}