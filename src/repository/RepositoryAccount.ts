import { Account } from "../model/Account";

export interface RepositoryAccount {

    // CRUD Methods (Create, Read, Update, and Delete)
    registerAccount(account: Account): void;
    listAllAccounts(): void;
    searchByNumber(bANumber: number): void;    
    updateAccount(account: Account): void;
    deleteAccount(bANumber: number): void;
    searchByHolder(bAHolder: string): void;

    // Banking Methods
    withdraw(bANumber: number, amount: number): void;
    deposit(bANumber: number, amount: number): void;
    transfer(numberOrigin: number,  numberDest: number, amount: number): void;

}