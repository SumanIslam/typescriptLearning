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

// const printVehicle = (vehicle: Vehicle): void => {
// 	console.log(`
//     Name: ${vehicle.name}
//     Year: ${vehicle.year}
//     Broken? ${vehicle.broken}
//   `);
// };

// printVehicle(oldCivic);

interface Vehicle2 {
	name: string;
	year: Date;
	broken: boolean;
}

const oldCivic2 = {
	name: 'civic',
	year: new Date(),
	broken: true,
};

const printVehicle = (vehicle: Vehicle2): void => {
	console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken? ${vehicle.broken}
  `);
};

printVehicle(oldCivic2);


// will generate error because broken property is not available
const oldCivic3 = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};