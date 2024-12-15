import { Account } from "../model/Account";
import { RepositoryAccount } from "../repository/RepositoryAccount";
import { colors } from "../util/Colors";

export class AccountController implements RepositoryAccount {

    // Array collection to store Account objects
    private accounts: Array<Account> = new Array<Account>();
    
    // Account ID - Autoincremental account primary key
    accountId: number = 0;

    searchByNumber(bANumber: number): void {
        
    }

    listAllAccounts(): void {
        for(let account of this.accounts) {
            account.display();
        }
    }

    registerAccount(account: Account): void {
        this.accounts.push(account);
        console.log(colors.fg.green, `\n-> The Bank Account number ${account.getNumber()} was registered successfully!`, colors.reset);
    }

    updateAccount(account: Account): void {
        
    }

    deleteAccount(bANumber: number): void {
        
    }

    withdraw(bANumber: number, amount: number): void {
        
    }

    deposit(bANumber: number, amount: number): void {
        
    }

    transfer(numberOrigin: number, numberDest: number, amount: number): void {
        
    }

    // Generate Account Number Automatically
    public generateAccNumber(): number {
        return ++this.accountId;
    }

}