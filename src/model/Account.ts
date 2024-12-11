export class Account {

    // Data model
    private _number: number;
    private _agency: number;
    private _type: number;
    private _holder: string;
    private _balance: number;

	constructor(bANumber: number, bBranch: number, bAType: number, bAHolder: string, balance: number) {
		this._number = bANumber;
		this._agency = bBranch;
		this._type = bAType;
		this._holder = bAHolder;
		this._balance = balance;
	}

	public get_number(): number {
		return this._number;
	}

	public get_agency(): number {
		return this._agency;
	}

	public get_type(): number {
		return this._type;
	}

	public get_holder(): string {
		return this._holder;
	}

	public get_balance(): number {
		return this._balance;
	}

	public set_number(value: number) {
		this._number = value;
	}

	public set_agency(value: number) {
		this._agency = value;
	}

    public set_type(value: number) {
		this._type = value;
	}

	public set_holder(value: string) {
		this._holder = value;
	}

	public set_balance(value: number) {
		this._balance = value;
	}

    public withdraw(ammount: number): boolean {
        if (this._balance < ammount) {
            console.log("\n-> Insufficient balance! Impossible to withdraw.\n");
            return false;
        }

        this._balance -= ammount;
        return true;
    }

    public deposit(valor: number): void {
        this._balance = this._balance + valor;
    }
    
    public display(): void {

        let bAType: string;

        switch(this._type) {
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
        console.log(`\n1) Bank Account Number: ${this._number};`);
        console.log(`2) Bank Branch: ${this._agency};`);
        console.log(`3) Bank Account Type: ${bAType};`);
        console.log(`4) Bank Account Holder: ${this._holder};`);
        console.log(`5) Bank Account Balance: ${new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(this._balance)}.\n`);

    }

}