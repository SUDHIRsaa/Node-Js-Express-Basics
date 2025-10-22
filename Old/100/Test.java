public class Test {
    public static void main(String[] args) {
        String s="2";
        int a=s.charAt(0)-'0';
        System.out.println(a);
        // 2 is printed

        String v="a";
         a=v.charAt(0)-'0';
        System.out.println(a);
        // -49 is printed because 'a' - '0' = 97 - 48 = 49


        char ch='a';
        int b=ch;
        System.out.println(b);
        // 97 is printed because 'a' = 97

        String str="95";
        int num=Integer.parseInt(str);
        System.out.println(num);
        // 95 is printed

        int aa=19;
        char cch=(char)(aa+'0');
        System.out.println(cch);
        // 'C' is printed because 19 + '0' = 19 + 48 = 67 which is 'C'

        for(int j= 65 ;j<=90;j++){
            System.out.print((char)j+" ");
        }
        // prints A to Z

      
       


    }

}
