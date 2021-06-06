abstract class Computer{
brand:string =null;
speed:string =null;
ram:string =null;
cost:string =null;

getDetails(){
  return {
      brand:this.brand,
      speed:this.speed,
      ram:this.ram,
      cost:this.cost 

  }  
}
}

class Laptop extends Computer {
    constructor(){
        super();
        this.type ="Laptop";
        this.cost = 300;
    }
}

abstract class ComputerWithAccessory extends Computer{
abstract getDetails();
}
abstract class ComputerWithMouse extends ComputerWithAccessory{
    computer:Computer;
    constructor( computerArg:Computer){
        super();
        this.computer = computerArg;
    }
    getDetails(){
        let degtails= this.computer.getDetails()
        return{...details,  cost:this.cost+25}
    }    
}

let computer1= new Laptop();
Computer.ram =8;
console.log(computer1.getDetails())

let computer1= new ComputerWithMouse(computer1);
console.log(computer1.getDetails())