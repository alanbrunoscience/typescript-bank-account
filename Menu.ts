import readlineSync = require("readline-sync");
import { colors } from './src/util/Colors';

export function main() {

    let option: number;

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



