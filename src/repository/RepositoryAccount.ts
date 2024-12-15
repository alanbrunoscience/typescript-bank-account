import { Account } from "../model/Account";

export interface RepositoryAccount {

    // CRUD Methods (Create, Read, Update, and Delete)
    searchByNumber(bANumber: number): void;
    listAllAccounts(): void;
    registerAccount(account: Account): void;
    updateAccount(account: Account): void;
    deleteAccount(bANumber: number): void;

    // Banking Methods
    withdraw(bANumber: number, amount: number): void;
    deposit(bANumber: number, amount: number): void;
    transfer(numberOrigin: number,  numberDest: number, amount: number): void;

}