let number1: number = 5;

let text: string = "Hello"

let hasCats = true;

let numberArray: number[] = [1, 2, 3, 4, 5];
let numberArray2: Array<number> = [1, 2, 3, 4, 5];

let srtingArray: string[] = ["a", "b", "c"]
let stringArray2: Array<string> = ["a", "b", "c"]

const arr:any = [true, 1, '3r3']


let randomVar: number | string = 'zdr'
randomVar = 5;


// any maha tipiziraneto(ne go polzvaj, ubiva smisala na TS)
let x: any = 1;

x = 'test';
x = { name: "pesho" }

type Person = {
   name: string;
   age: number
}

interface Person2{
   name: string;
   age: number;
}

let person1: Person = {
   name: 'Pesho',
   age:22
}

let person2: Person2 = {
   name: 'Pesho',
   age:22
}


class Human {
  public greeting: string = 'Hello';

   

   public greet(): void {
      console.log(this.greeting);
      
   }
}

const p = new Human()
p.greet()

type Dog<T> = {
   id:T
name: string
}

const dog: Dog<number> = { id: 1, name: 'Roshko' }
const dog2: Dog<string> = { id: "sddsd", name: 'Roshko' }
const dog3: Dog<Dog<number>> = {
   id: { id:1, name: 'Roshko' },
   name:"Roshko"
}


enum PaymentStatus{
   Successfull,
   Failed,
   Pending
}
console.log(PaymentStatus.Successfull);
console.log(PaymentStatus.Failed);
console.log(PaymentStatus.Pending);
