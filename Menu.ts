import readlineSync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Account } from './src/model/Account';
import { CheckingAccount } from "./src/model/CheckingAccount";

export function main() {

    let option: number;

    // Create an Object Account
    const c1 = new Account(1, 123, 1, "Jonas", 100000);
    c1.display();

    // Withdraw
    console.log("\n====== TRYING TO WITHDRAW R$ 200.000,00 ======");
    console.log(c1.withdraw(200000));

    console.log("\n====== SHOW THAT THE BALANCE AMOUNT HAS NOT CHANGED ======");
    c1.display();

    // Create a New Object Account
    const c2 = new Account(2, 123, 2, "Aline", 200000);
    console.log("\n====== DISPLAY NEW OBJECT INFO ======");
    c2.display();

    // Deposit
    console.log("\n====== DEPOSITING R$ 100,00 FOR THIS NEW OBJECT ======");
    c2.deposit(100);

    console.log("\n====== SHOW THAT THE BALANCE AMOUNT INCREASED ======");
    c2.display();

    // Create an Object Checking Account
    const cc1 = new CheckingAccount(3, 789, 1, "Andressa", 100000, 1000); // Or const cc1: CheckingAccount = new CheckingAccount(...)

    console.log("\n====== DISPLAY NEW OBJECT INFO ======");
    cc1.display();

    // Withdraw
    console.log("\n====== TRYING TO WITHDRAW R$ 100.500,00 ======");
    cc1.withdraw(100500);

    console.log("\n====== SHOW THAT THE BALANCE VALUE HAS BECOME NEGATIVE (OVERDRAFT LIMIT) ======");
    cc1.display();

    // Deposit
    console.log("\n====== DEPOSITING R$ 1000,00 FOR THIS OBJECT ======");
    cc1.deposit(1000);

    console.log("\n====== SHOW THAT THE OVERDRAFT LIMIT WAS OFFSET BY THE DEPOSIT MADE ======");
    cc1.display();

    do {
        option = menu();
    
        switch(option) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCreate a bank account:\n", colors.reset);
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nList all bank accounts:\n", colors.reset);
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nSearch bank account by number:\n", colors.reset);
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nUpdate bank account details:\n", colors.reset);
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nDelete bank account:\n", colors.reset);
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nWithdraw:\n", colors.reset);
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\nDeposit:\n", colors.reset);
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\nTransfer amounts:\n", colors.reset);
                break;
            case 9:
                console.log(colors.fg.greenstrong);
                console.log("\nBrazilian Bank - Your Future Starts Here!");
                about();
                console.log(colors.reset, "");
                break;
            default:
                console.log(colors.fg.whitestrong, "\n-> Invalid option! Choose an option between 1 and 9.", colors.reset);
        }
    } while(option !== 9);
}

export function menu(): number {

    console.log(colors.bg.black, colors.fg.yellow);
    console.log("\n*********************************************************");
    console.log("\n                      BRAZILIAN BANK                      \n");
    console.log("*********************************************************");
    console.log("\n 1 - Create bank account;" +
        "\n 2 - List all bank accounts;" +
        "\n 3 - Search bank account by number;" +
        "\n 4 - Update bank account details;" +
        "\n 5 - Delete bank account;" +
        "\n 6 - Withdraw;" +
        "\n 7 - Deposit;" +
        "\n 8 - Transfer amounts between bank accounts;" +
        "\n 9 - Exit."
    );
    let option: number = readlineSync.questionInt("\n-> Choose an option above: ", {limitMessage: "\n-> Invalid data type entered!"});
    console.log("\n********************************************************");
    console.log(colors.reset);

    return option;

}

export function about(): void {
    console.log("\nProject Developed by:\n");
    console.log("-> Alan Bruno - alanengem@gmail.com");
    console.log("-> https://github.com/alanbrunoscience/typescript-bank-account");
}

export function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\n-> Press 'Enter' to continue...");
    readlineSync.prompt();
}

// Call the main function to start the program
main();



