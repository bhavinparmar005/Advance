class Bank{

    constructor(name,account,balance,trans,ifsc="AM123",branch="Amreli"){
        this.name = name,
        this.account = account,
        this._balance = balance,
        this.trans = trans,
        this.ifsc = ifsc,
        this.branch = branch
       
    }

    info(){
        console.log(`
            Name : ${this.name},
            Account : ${this.account},
            Balance : ${this._balance},
            IFSC : ${this.ifsc},
            Branch : ${this.branch}
        `);
    }

    transtions(){
        console.log(`Your Last 5 transtions ${this.trans}`)
    }

    get balance(){
       return this._balance
    }

    set balance(amount){
        return this._balance = amount;
    }
}

let ram = new Bank("Ram",123,5000,[10,20,30,40,50]);


ram.info()
ram.transtions()

console.log(`Initial Balance : ${ram.balance}`)

ram.balance = 9000; // Updating to balance

console.log(`Update Balance : ${ram.balance}`)