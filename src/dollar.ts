import { Money } from "./money";

export class Dollar extends Money {
  constructor(amount: number) { 
    super(amount);
  }

  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }

  equals(dollar: Dollar | null) {
    if (dollar === null) {
        return false;
    }

    return this.amount === dollar.amount
  }
}
