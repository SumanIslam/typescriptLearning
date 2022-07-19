interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
};

// will generate error because broken property is not available
const oldCivic2 = {
  name: 'civic',
  year: 2000,
  isBroken: true,  
};

const printVehicle = (vehicle: { name: string; year: Number; isBroken: Boolean }): void => {
  // console.log(vehicle.summary());
  console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken? ${vehicle.isBroken}
  `);
  
  
}

printVehicle(oldCivic2);