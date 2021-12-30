import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

export class Bank {
  reduce(source: Expression, to: string):Money {
    if (source instanceof Money)
      return source;

    const sum = source as Sum;
    return sum.reduce(to);
  }
}
