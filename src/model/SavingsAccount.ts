import { Account } from "./Account";

export class SavingsAccount extends Account {

    private _anniversaryDate: number;

    // Personalized Methods
    public display(): void {
        super.display();
        console.log(`6) Bank Account Anniversary Date (day): ${this.getAnniversaryDate()}.\n`);
    }

    // Special Methods
    constructor(bANumber: number, bABranch: number, bAType: number, bAHolder: string, balance: number, anniversaryDate: number) {
        super(bANumber, bABranch, bAType, bAHolder, balance);
        this._anniversaryDate = anniversaryDate;
    }

    public getAnniversaryDate(): number {
        return this._anniversaryDate;
    }

    public setAnniversaryDate(anniversaryDate: number) {
        this._anniversaryDate = anniversaryDate;
    }

}