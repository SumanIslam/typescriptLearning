const profile = {
  user: 'alex',
  age: 30,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age, user }: { age: number, user: string } = profile;

const {
	coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;