import { colors } from "../util/Colors";

export abstract class Account {

    // Data model
    private _number: number;
    private _agency: number;
    private _type: number;
    private _holder: string;
    private _balance: number;

    // Personalized Methods
    public withdraw(amount: number): boolean {

        if(this.getBalance() < amount) {
            console.log(colors.fg.red, "\n\n-> Insufficient balance! Impossible to withdraw.\n", colors.reset);
            return false;
        } else {
            this.setBalance(this.getBalance() - amount);
            return true;
        }

    }

    public deposit(amount: number): void {
        this.setBalance(this.getBalance() + amount);
    }

    public display(): void {

        let bAType: string = "";

        switch(this.getType()) {
            case 1:
                bAType = "Checking Account";
                break;
            case 2:
                bAType = "Savings Account";
                break;
            default:
                bAType = "Invalid Account Type";
                
        }

        console.log("\n******************************************");
        console.log("            Bank Account Data            ");
        console.log("******************************************");
        console.log(`\n1) Bank Account Number: ${this.getNumber()};`);
        console.log(`2) Bank Branch: ${this.getAgency()};`);
        console.log(`3) Bank Account Type: ${bAType};`);
        console.log(`4) Bank Account Holder: ${this.getHolder()};`);
        console.log(`5) Bank Account Balance: ${new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(this.getBalance())};`);

    }

    // Special Methods
    constructor(bANumber: number, bABranch: number, bAType: number, bAHolder: string, balance: number) {
        this._number = bANumber;
        this._agency = bABranch;
        this._type = bAType;
        this._holder = bAHolder;
        this._balance = balance;
    }

    public getNumber(): number {
        return this._number;
    }

    public setNumber(bANumber: number) {
        this._number = bANumber;
    }

    public getAgency(): number {
        return this._agency;
    }

    public setAgency(bABranch: number) {
        this._agency = bABranch;
    }

    public getType(): number {
        return this._type;
    }

    public setType(bAType: number) {
        this._type = bAType;
    }

    public getHolder(): string {
        return this._holder;
    }

    public setHolder(bAHolder: string) {
        this._holder = bAHolder;
    }

    public getBalance(): number {
        return this._balance;
    }

    public setBalance(balance: number) {
        this._balance = balance;
    }

}