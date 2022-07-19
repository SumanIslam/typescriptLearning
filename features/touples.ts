const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// type alias
type Drink = [string, boolean, number]

// tuple
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// pepsi[0] = 40; // will show error
// pepsi[2] = 'brown'; // will show error

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
}