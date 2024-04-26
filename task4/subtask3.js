const bankAccount = {
    _balance: 22400,
    //Getter
    get formattedBalance() {
        return `${this._balance} $`;
    },
    //Setter
    set balance(amount) {
        this._balance = amount;
    },

    transfer(targetAccount, amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            targetAccount.balance += amount;
            console.log(`Transfer successful: $${amount} transferred from this account to target account.`);
        } else {
            console.log("Error while transfer. You dont have much money");
        }
    }
};

const targetAccount = {
    _balance: 1800,
    //Getter
    get formattedBalance() {
        return `Balance: ${this._balance} $`;
    },
};

console.log("Before transfer:");
console.log("Sender account balance:", bankAccount.formattedBalance);
console.log("Receiver account balance:", targetAccount.formattedBalance);

bankAccount.transfer(targetAccount, 500);

console.log("\nAfter transfer:");
console.log("Sender account balance:", bankAccount.formattedBalance);
console.log("Receiver account balance:", targetAccount.formattedBalance);
