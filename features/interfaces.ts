interface Vehicle {
  name: string,
  year: number,
  broken: boolean
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,  
};

// will generate error because broken property is not available
// const oldCivic2 = {
//   name: 'civic',
//   year: 2000,
//   isBroken: true,  
// };

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}

printVehicle(oldCivic);