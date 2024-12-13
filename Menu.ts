import readlineSync = require("readline-sync");
import { colors } from './src/util/Colors';
import { CheckingAccount } from "./src/model/CheckingAccount";
import { SavingsAccount } from "./src/model/SavingsAccount";
import { ControllerAccount } from "./src/controller/ControllerAccount";

export function main() {

    let option, bANumber, bABranch, bAType, balance, overdraftLimit, anniversaryDate: number;
    let bAHolder: string;
    const accountTypes = ["Checking Account", "Savings Account"];

    // Controller class instance
    let accounts: ControllerAccount = new ControllerAccount();

    // New Instances of the Checking Account Class (Objects)
    accounts.registerAccount(new CheckingAccount(accounts.generateBANumber(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    accounts.registerAccount(new CheckingAccount(accounts.generateBANumber(), 4578, 1, 'João da Silva', 1000.00, 100.00));


    // New Instances of the Savings Account Class (Objects)
    accounts.registerAccount(new SavingsAccount(accounts.generateBANumber(), 5789, 2, "Geana Almeida", 10000, 10));
    accounts.registerAccount(new SavingsAccount(accounts.generateBANumber(), 5698, 2, "Jean Lima", 15000, 15));

    do {
        option = menu();
    
        switch(option) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCreate a bank account:\n", colors.reset);

                console.log("Enter the bank branch number: ");
                bABranch = readlineSync.questionInt('');

                console.log("\nEnter the account holder name: ");
                bAHolder = readlineSync.question('');

                console.log("\nEnter the account type: ");
                bAType = readlineSync.keyInSelect(accountTypes, "", {cancel: false}) + 1;

                console.log("\nEnter the account balance: ");
                balance = readlineSync.questionFloat('');

                switch(bAType) {
                    case 1:
                        console.log("\nEnter the overdraft limit: ");
                        overdraftLimit = readlineSync.questionFloat('');
                        accounts.registerAccount(new CheckingAccount(accounts.generateBANumber(), bABranch, bAType, bAHolder, balance, overdraftLimit));
                        break;
                    case 2:
                        console.log("\nEnter the savings account anniversary: ");
                        anniversaryDate = readlineSync.questionInt('');
                        accounts.registerAccount(new SavingsAccount(accounts.generateBANumber(), bABranch, bAType, bAHolder, balance, anniversaryDate));
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nList all bank accounts:\n", colors.reset);
                accounts.listAllAccounts();
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nSearch bank account by number:\n", colors.reset);

                console.log("\nEnter the account number:");
                bANumber = readlineSync.questionInt('');

                accounts.searchByNumber(bANumber);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nUpdate bank account details:\n", colors.reset);
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nDelete bank account:\n", colors.reset);
                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nWithdraw:\n", colors.reset);
                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\nDeposit:\n", colors.reset);
                keyPress();
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\nTransfer amounts:\n", colors.reset);
                keyPress();
                break;
            case 9:
                console.log(colors.fg.greenstrong);
                console.log("\nBrazilian Bank - Your Future Starts Here!");
                about();
                console.log(colors.reset, "");
                keyPress();
                break;
            default:
                console.log(colors.fg.whitestrong, "\n-> Invalid option! Choose an option between 1 and 9.", colors.reset);
                keyPress();
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



