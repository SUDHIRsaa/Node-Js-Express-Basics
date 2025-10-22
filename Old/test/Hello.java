
import java.util.HashMap;



public class Hello{
public static void main(String args[]){
    String s="EaDOJIIYUIGY123123_@#$$%^^&&*(()DADG JUIGFFFFFFF";
    String ss="";
    s=s.toLowerCase();
    HashMap<Character,Integer> map=new HashMap<>();
    
    for(int i=0;i<s.length();i++){
        if(s.charAt(i)>='a' && s.charAt(i)<='z'){
          ss=ss+s.charAt(i);
            map.put(s.charAt(i),map.getOrDefault(s.charAt(i),0)+1);
        }
    }
   
}
}
