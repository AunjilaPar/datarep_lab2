//Inheritence
//start of class
class Vehicle{
    //Constructor with arguments
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Method (get the make, model and year)
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}//End of class

//Testing the make model and year out (part B)
/*let myVehicle = new Vehicle('VW', 'Gold', 2009);
let info = myVehicle.Information();*/

//Inherit from Vehicle (part C)
class Cars extends Vehicle{
     //Constructor with arguments
    constructor(make, model, year, doors){
        super(make, model, year);//To call from parent
        this.doors = doors;

    }
    //Child class
    Information(){
        super.Information();//Invoke from Information with Doors
        console.log(`Doors: ${this.doors}`)
    }
}
//print out information about the car using instance
let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();