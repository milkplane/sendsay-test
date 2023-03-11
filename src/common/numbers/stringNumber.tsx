const isNegative = (number: string): boolean => {
  if (number.length === 0) return false;

  return number[0] === '-';
};

export const hasPoint = (number: string): boolean => {
  return number.includes(',') || number.includes('.');
};

const getNonDigitsCount = (number: string): number => {
  let nonNumberCount = 0;

  if (isNegative(number)) {
    nonNumberCount++;
  }
  if (hasPoint(number)) {
    nonNumberCount++;
  }

  return nonNumberCount;
};

export const howManyDigits = (number: string): number => {
  return number.length - getNonDigitsCount(number);
};

export const replaceWithDot = (number: string): string => {
  return number.replace(',', '.');
};

export const replaceWithComma = (number: string): string => {
  return number.replace('.', ',');
};

const splitExponential = (digitLimit: number, number: number): [number, number] => {
  const [before, afterWithSign] = number.toExponential(digitLimit).split('e');
  const after = afterWithSign.slice(1);

  return [Number(before), Number(after)];
};

const getExponentialLength = (digitLimit: number, number: number): number => {
  const [rawValue, exponentioalValue] = splitExponential(digitLimit, number);

  const rawDigits = howManyDigits(rawValue.toString());
  const exponentioalDigits = exponentioalValue.toString().length;
  const extraDigits = digitLimit - (rawDigits + exponentioalDigits + 2); // 2 e(+-) in e+256
  const sumExponentialDigits = (exponentioalValue + extraDigits).toString().length;

  return Math.max(sumExponentialDigits, exponentioalDigits) + 2; // 2 e(+-) in e+256
};

export const roundToStringNumber = (digitLimit: number, number: number): string => {
  if (isNaN(number)) return 'NaN';

  const stringNumber = number.toString();
  const digits = howManyDigits(stringNumber);
  if (digits < digitLimit) return replaceWithComma(stringNumber);

  const exponentialLength = getExponentialLength(digitLimit, number);

  return replaceWithComma(number.toExponential(Math.max(1, digitLimit - exponentialLength - 1))); 
};