interface IUser{
    name: string;
    age: number;
    gender: string
}

const user: IUser = {name: "Max", age: 18, gender: 'male'};

interface ShowSum {
    sum: () => number
    showSum: () => number
}





interface incAge{
    someUser:()=> number
    inc:()=> number
}

class Sum implements ShowSum{
    constructor(private a:number, private b:number) {
    }

    sum(): number{
        return this.a+this.b
    }

    showSum(): number{
        console.log(this.a+this.b)
        return this.a + this.b
    }
}