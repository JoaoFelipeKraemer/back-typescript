const unitsmass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsmass.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = unitsmass.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}