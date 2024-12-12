import { Account } from "./Account";

export class CheckingAccount extends Account {

    private _overdraftLimit: number;

    // Personalized Methods
    public withdraw(amount: number): boolean {

        // if(amount > (this.getBalance() + this.getOverdraftLimit())) {
        if((amount - this.getBalance()) > Math.abs(this.getOverdraftLimit())) {
            console.log("\n-> Insufficient balance! Impossible to withdraw.\n");
            return false;
        } else {
            this.setBalance(this.getBalance() - amount);
            return true;
        }

    }

    public deposit(amount: number) {
        this.setBalance(this.getBalance() + amount);
    }

    public display(): void {
        super.display();
        console.log(`6) Overdraft Limit: ${new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(this.getOverdraftLimit())}.\n`);
    }

    // Special Methods
    constructor(bANumber: number, bABranch: number, bAType: number, bAHolder: string, balance: number, overdraftLimit: number) {
        super(bANumber, bABranch, bAType, bAHolder, balance);
        this._overdraftLimit = overdraftLimit;
    }

	public getOverdraftLimit(): number {
		return this._overdraftLimit;
	}

	public setOverdraftLimit(overdraftLimit: number) {
		this._overdraftLimit = overdraftLimit;
	}


}