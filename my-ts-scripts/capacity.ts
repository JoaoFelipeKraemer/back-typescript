const unitscapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];


function convertCapacity(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitscapacity.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = unitscapacity.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

