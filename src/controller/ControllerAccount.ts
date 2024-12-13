import { Account } from '../model/Account';
import { RepositoryAccount } from '../repository/RepositoryAccount';

export class ControllerAccount implements RepositoryAccount {

    /// Array collection to store Account objects
    private listAccounts = new Array<Account>();

    // Control account numbers
    public bANumber: number = 0;

    searchByNumber(bANumber: number): void {

        const searchAccount = this.searchInArray(bANumber);

        if(searchAccount != null)
            searchAccount.display();
        else 
            console.log("\n-> Bank Accoun not found!")

    }

    listAllAccounts(): void {
        for(let account of this.listAccounts) {
            account.display();
        }
    }

    registerAccount(account: Account): void {
        this.listAccounts.push(account);
        console.log("\n-> The bank account was registered successfully.");
    }

    updateAccount(account: Account): void {

    }

    deleteAccount(bANumber: number): void {

    }

    withdraw(bANumber: number, amount: number): void {

    }
    
    deposit(bANumber: number, amount: number): void {
        
    }

    transfer(numberOrigin: number,  numberDest: number, amount: number): void {

    }

    // Auxiliary Methods
    public generateBANumber(): number {
        return ++this.bANumber;
    }

    public searchInArray(bANumber: number): Account | null {
        for (let account of this.listAccounts) {
            if(account.getNumber() === bANumber) {
                return account;
            }
        }
        
        return null;

    }

}