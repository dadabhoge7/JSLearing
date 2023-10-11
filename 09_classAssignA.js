console.log(`-----> Details Of Vehicle <-----`);
class Vehicle {
    // Properties
    color
    model
    fuelType
    seatingCapacity
    company
    // constructor
    constructor (color,model,fuelType,seatingCapacity,company){
        this.color = color;
        this.model = model;
        this.company = fuelType;
        this.seatingCapacity = seatingCapacity;
        this.fuelType = company;
    }
   // method
    details(){
        console.log(`color : ${this.color}`);
        console.log(`model : ${this.model}`);
        console.log(`fuelType : ${this.fuelType}`);
        console.log(`seatingCapacity : ${this.seatingCapacity}`);
        console.log(`company : ${this.company}`);

    }
}
const vehicle1 = new Vehicle("Red", "Shine", "Petrol", 2, "Honda");
const vehicle2 = new Vehicle("black", "Unicorn", "Petrol", 2, "Honda");
const vehicle3 = new Vehicle("black", "Raider", "Petrol", 2, "TVS");
const vehicle4 = new Vehicle("Grey", "FZ", "Petrol", 2, "Yamaha");
const vehicle5 = new Vehicle("White", "Pulser", "Petrol", 2, "Bajaj");

const arrayOfVehicle = [vehicle1,vehicle2,vehicle3,vehicle4,vehicle5]
console.log(`MyArray : ${arrayOfVehicle}`);
console.log(`Traverse of Array`);
for (const Index in arrayOfVehicle) {
        const Vehicle = arrayOfVehicle[Index];
        console.log(Vehicle);
}
console.log(`-----> Vehicle details using Method <-----`);
for (const Index in arrayOfVehicle) {
    const Vehicle = arrayOfVehicle[Index];
    Vehicle.details();
}
console.log(`________________________________________________________________________________________________________________________`);
console.log(`------------------------------------------------------------------------------------------------------------------------`);

console.log(`-----> Details Of Collage <-----`);

class Collage {
    collageName
    noOfDepartments
    collageAddress
    university
constructor (collageName,noOfDepartments,collageAddress,university){

    this.collageName = collageName;
    this.noOfDepartments = noOfDepartments;
   this.collageAddress = collageAddress;
    this.university = university;
}
display(){
    console.log(`collageName : ${this.collageName}`);
    console.log(`noOfDepartments : ${this.noOfDepartments}`);
    console.log(`collageAddress : ${this.collageAddress}`);
    console.log(`university : ${this.university}`);
}

}

const SBPCOEDetails = new Collage("SBPCOE","5","Indapur", "Pune University");
console.log(`----> Details of SBPCOE <----`);
SBPCOEDetails.display();

const ZeelEDetails = new Collage("ZEEL","4","Narhe", "Pune University");
console.log(`----> Details of Zeel <----`);
ZeelEDetails.display();

const COEPDetails = new Collage("COEP","7","Shivajinagar", "Pune University");
console.log(`----> Details of COEP <----`);
COEPDetails.display();

const arrayOfCollage = [SBPCOEDetails,ZeelEDetails,COEPDetails];
console.log(`-----> Collage Array <-----`);
console.log(arrayOfCollage);
console.log(`-----> Traverse Collage Array <-----`);
for (const index in arrayOfCollage) {
    const Collage = arrayOfCollage[index];
    console.log(Collage);
}

