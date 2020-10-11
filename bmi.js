//Start of class
class BMI {
    //Constructor(starting point of class, with arguments)
    constructor(height, weight) {
        //Create local instance to access inside the class
        this.height = height;
        this.weight = weight;
    }
    //To calculate BMI method
    calculateBMI() {
         //BMI calculating formula
        let bmi = this.weight / (this.height ** 2); 
        return bmi;
    }//End of calculation
}//End of class

//Print information on the screen using instance 
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI);//output 