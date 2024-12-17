import { Account } from "../model/Account";
import { RepositoryAccount } from "../repository/RepositoryAccount";
import { colors } from "../util/Colors";

export class ControllerAccount implements RepositoryAccount {

    // Array collection to store Account objects
    private accounts: Array<Account> = new Array<Account>();
    
    // Account ID - Auto Incremental primary key
    accountId: number = 0;

    searchByNumber(bANumber: number): void {
        
        let searchedAccount = this.searchInArray(bANumber);

        if (searchedAccount != null) {
            searchedAccount.display();
        } else {
            console.log(colors.fg.red, `\n-> Bank account number ${bANumber} was not found!\n`, colors.reset);
        }

    }

    listAllAccounts(): void {
        for(let account of this.accounts) {
            account.display();
        }
    }

    registerAccount(account: Account): void {
        this.accounts.push(account);
        console.log(colors.fg.green, `\n-> The Bank Account number ${account.getNumber()} was registered successfully!\n`, colors.reset);
    }

    updateAccount(account: Account): void {

        let searchedAccount = this.searchInArray(account.getNumber());

        if (searchedAccount != null) {
            this.accounts[this.accounts.indexOf(searchedAccount)] = account;
            console.log(colors.fg.green, `\n-> Bank account number ${account.getNumber()} has been updated successfully!\n`, colors.reset);
        } else {
            console.log(colors.fg.red, `\n-> Bank account number ${account.getNumber()} was not found!\n`, colors.reset);
        }
        
    }

    deleteAccount(bANumber: number): void {

        let searchedAccount = this.searchInArray(bANumber);

        if (searchedAccount != null) {
            this.accounts.splice(this.accounts.indexOf(searchedAccount), 1);
            console.log(colors.fg.green, `\n\n-> Bank account number ${bANumber} has been deleted successfully!\n`, colors.reset);
        } else {
            console.log(colors.fg.red, `\n\n-> Bank account number ${bANumber} was not found!\n`, colors.reset);
        }

    }

    withdraw(bANumber: number, amount: number): void {
        
        let searchedAccount = this.searchInArray(bANumber);

        if (searchedAccount != null) {
            if(searchedAccount.withdraw(amount) == true) {
                console.log(colors.fg.green, `\n\n-> The withdrawal from account number ${bANumber} was successful! Now, the current balance is R$ ${searchedAccount.getBalance().toFixed(2)}.\n`, colors.reset);
            }
        } else {
            console.log(colors.fg.red, `\n\n-> Bank account number ${bANumber} was not found!\n`, colors.reset);
        }

    }

    deposit(bANumber: number, amount: number): void {

        let searchedAccount = this.searchInArray(bANumber);

        if (searchedAccount != null) {
            searchedAccount.deposit(amount);
            console.log(colors.fg.green, `\n\n-> The deposit into account number ${bANumber} was successful! Now, the current balance is R$ ${searchedAccount.getBalance().toFixed(2)}.\n`, colors.reset);
        } else {
            console.log(colors.fg.red, `\n\n-> Bank account number ${bANumber} was not found!\n`, colors.reset);
        }
        
    }

    transfer(numberOrigin: number, numberDest: number, amount: number): void {
        
    }
    
    public toTitleCase(holderName: string) {
        return holderName
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    // Generate Account Number Automatically
    public generateAccNumber(): number {
        return ++this.accountId;
    }

    // Check if an account exists
    public searchInArray(bANumber: number): Account | null {
        for(let account of this.accounts) {
            if(account.getNumber() === bANumber)
                return account;
        }

        return null;
        
    }

    isEmpty(): boolean {
        let result = this.accounts.length <= 0;
        return result;
    }

    getCurrentBalance(bANumber: number): number | null {

        let searchedAccount = this.searchInArray(bANumber);
        
        if (searchedAccount) {
            return searchedAccount.getBalance();
        } else {
            console.log(colors.fg.red, `\n\n-> Bank account number ${bANumber} was not found!\n`, colors.reset);
            return null;
        }
    }
    

}