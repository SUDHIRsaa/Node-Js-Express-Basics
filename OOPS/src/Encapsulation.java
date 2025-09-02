public class Encapsulation {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount(1000);
        //  acc.balance = -5000;  // ❌ Wrong! Account should not have negative balance
        acc.deposit(500);
        System.out.println("Balance: " + acc.getBalance());
    }
}
class BankAccount {
    private double balance; // data is hidden

    // constructor
    BankAccount(double balance) {
        this.balance = balance;
    }

    // getter
    public double getBalance() {
        so
        return balance;
    }

    // setter
    public void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
        }
    }
}


