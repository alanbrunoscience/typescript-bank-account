import readlineSync = require("readline-sync");
import { colors } from './src/util/Colors';
import { CheckingAccount } from "./src/model/CheckingAccount";
import { SavingsAccount } from "./src/model/SavingsAccount";
import { ControllerAccount } from "./src/controller/ControllerAccount";

export function main() {

    // Instance of the Controller Account class
    let account: ControllerAccount = new ControllerAccount();

    // Auxiliary variables
    let option, bANumber, bABranch, bAType, balance, overdraftLimit, anniversaryDate: number;
    let bAHolder: string;
    const accountTypes = ['Checking Account', 'Savings Account'];

     // New Instances of the Checking Account Class (Objects)
     account.registerAccount(new CheckingAccount(account.generateAccNumber(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
     account.registerAccount(new CheckingAccount(account.generateAccNumber(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
     // New Instances of the Savings Account Class (Objects)
     account.registerAccount(new SavingsAccount(account.generateAccNumber(), 5789, 2, "Geana Almeida", 10000, 10));
     account.registerAccount(new SavingsAccount(account.generateAccNumber(), 5698, 2, "Jean Lima", 15000, 15));

    do {
        option = menu();
    
        switch(option) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCreate a bank account:\n", colors.reset);

                bABranch = readlineSync.questionInt("\n1) Enter the account branch number: ", {limitMessage: "\n-> Invalid data type entered!"});

                bAHolder = readlineSync.question("\n2) Enter the account holder's name: ");

                console.log("\n3) Select the account type:");
                bAType = readlineSync.keyInSelect(accountTypes, "> ", {cancel: false}) + 1;

                balance = readlineSync.questionFloat("\n4) Enter the initial balance: R$ ");
                
                while(balance < 0.00) {
                    balance = readlineSync.questionFloat("\n-> Invalid data! Enter a balance greater than or equal to 0: R$ ");
                }

                switch(bAType) {
                    case 1:
                        overdraftLimit = readlineSync.questionFloat("\n5) Enter the account overdraft limit: R$ ");
                        while(overdraftLimit < 0.00) {
                            overdraftLimit = readlineSync.questionFloat("\n-> Invalid data! Enter an overdraft limit greater than or equal to 0: R$ ");
                        }

                        account.registerAccount(new CheckingAccount(account.generateAccNumber(), bABranch, bAType, bAHolder, balance, overdraftLimit));
                        break;
                    case 2:
                        anniversaryDate = readlineSync.questionFloat("\n5) Enter the anniversary day of the Savings Account: ");
                        while(anniversaryDate < 1 || anniversaryDate > 28) {
                            anniversaryDate = readlineSync.questionFloat("\n-> Invalid data! Enter a value between 1 and 28: ");
                        }

                        account.registerAccount(new SavingsAccount(account.generateAccNumber(), bABranch, bAType, bAHolder, balance, anniversaryDate));
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nList all bank accounts:\n", colors.reset);

                account.listAllAccounts();

                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nSearch bank account by number:\n\n", colors.reset);

                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\nUpdate bank account details:\n\n", colors.reset);

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\nDelete bank account:\n\n", colors.reset);

                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\nWithdraw:\n\n", colors.reset);

                keyPress();
                break;
            case 7:
                console.log(colors.fg.whitestrong, "\nDeposit:\n\n", colors.reset);

                keyPress();
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\nTransfer amounts:\n\n", colors.reset);

                keyPress();
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
    process.stdout.write(colors.reset + "-> Press 'Enter' to continue... "); // Display everything on the same line
    readlineSync.question("");
}

// Call the main function to start the program
main();