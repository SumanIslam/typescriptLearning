class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  hunk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.hunk();