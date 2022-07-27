function triple(value: number | string): number | string {
  if(typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

triple(9);