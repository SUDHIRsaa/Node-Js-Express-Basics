import java.util.*;
import java.util.stream.Collectors;

interface command{
    void undo();
    void execute();
}

class TextEditor{
    StringBuilder text=new StringBuilder();
    Stack<command> undoStack=new Stack<>();
    Stack<command> redoStack=new Stack<>();
    void executeCommand(command cmd){
        cmd.execute();
        undoStack.push(cmd);
        redoStack.clear();
    }
    void undo(){
        if(!undoStack.isEmpty()){
            command cmd=undoStack.pop();
            cmd.undo();
            redoStack.push(cmd);
        }
    }
    void redo(){
        if(!redoStack.isEmpty()){
            command cmd=redoStack.pop();
            cmd.execute();
            undoStack.push(cmd);
        }
    }
    String getText(){
        return text.toString();
    }

    void appendText(String str){
        text.append(str);
    }
    void deleteText(int length){
        text.delete(text.length()-length, text.length());
    }

}
class AppendCommand implements command{
    TextEditor editor;
    String str;
    AppendCommand(TextEditor editor, String str){
        this.editor=editor;
        this.str=str;
    }
    public void execute(){
        
        editor.text.append(str);
    }
    public void undo(){
        editor.deleteText(str.length());
    }
}

class User {
    String name;
    int age;
    User(String name, int age){
        this.name=name;
        this.age=age;
    }
}
public class HelloApp{
    public static void main(String[] args) {
        TextEditor editor = new TextEditor();
        editor.executeCommand(new AppendCommand(editor, "Hello"));
        editor.executeCommand(new AppendCommand(editor, " World"));
        editor.undo();
    
        // System.out.println(editor.getText()); // Outputs: Hello World
        // // You can print the result to verify
        // System.out.println(editor.getText());

        List<User> ls=Arrays.asList(
            new User("Alice", 30),
            new User("Bob", 25),
            new User("Charlie", 35)
        );
        for(User u:ls){
            System.out.println(u.name+" "+u.age);
        }
         double averageAge = ls.stream()
                              .mapToInt(u -> u.age)
                              .average()
                              .orElse(0.0);
        Map<String, Integer> nameAgeMap = ls.stream()
                                              .collect(Collectors.toMap(u -> u.name, u -> u.age));
          Map<Integer, Integer> mp = new HashMap<>() {{
        put(1, 100);
        put(2, 200);
        put(3, 300);
    }}; 
       Map<Integer, Integer> mph = Map.of(
        1, 100,
        2, 200,
        3, 300
    );

        System.out.println(nameAgeMap);
        System.out.println("Average age: " + averageAge);      
    }
}