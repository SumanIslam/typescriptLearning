interface Vehicle {
  name: string;
  year: Number;
  broken: boolean;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true
};

// const printVehicle = (vehicle: {
// 	name: string;
// 	year: Number;
// 	isBroken: Boolean;
// }): void => {
// 	console.log(`
//     Name: ${vehicle.name}
//     Year: ${vehicle.year}
//     Broken? ${vehicle.isBroken}
//   `);
// };

// printVehicle(oldCivic);

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken? ${vehicle.broken}
  `);
};

printVehicle(oldCivic);

// will generate error because broken property is not available
const oldCivic2 = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};