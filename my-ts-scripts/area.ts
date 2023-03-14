const unitslength = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertLength(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitslength.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = unitslength.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
  
    return value * Math.pow(10, exponent);
  }