import { Bank } from "./bank";
import { Currency, Money } from "./money";
import Big from "big.js";

export interface Expression{
  times(multiplier: number): Expression;
  plus(addend: Expression): Expression;
  reduce(bank: Bank, to: Currency): Money;
}

export const roundCalculate = (value1 :number, value2 :number): number => {
  return Big(value1).plus(Big(value2)).toNumber();
}
