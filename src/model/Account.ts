export class Account {

    // Data model
    private _number: number;
    private _agency: number;
    private _type: number;
    private _holder: string;
    private _balance: number;

	constructor(_number: number, _agency: number, _type: number, _holder: string, _balance: number) {
		this._number = _number;
		this._agency = _agency;
		this._type = _type;
		this._holder = _holder;
		this._balance = _balance;
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
    
    public display(): void {
        console.log("\n******************************************");
        console.log("            Bank Account Data            ");
        console.log("******************************************");
        console.log(`\n1) Bank Account Number: ${this._number};`);
        console.log(`2) Bank Branch: ${this._agency};`);
        console.log(`3) Bank Account Type: ${this._type};`);
        console.log(`4) Bank Account Holder: ${this._holder};`);
        console.log(`5) Bank Account Balance: ${new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(this._balance)}.\n`);
    }

}