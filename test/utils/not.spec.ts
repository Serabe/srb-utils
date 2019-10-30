import { not } from '../../src/srb-utils';
import { Predicate } from '../../src/types';

describe('not', () => {
  test('returns a predicate that accepts the same parameters but returns the other boolean value', () => {
    type MyPredicate = Predicate<[string, number, Symbol]>;
    const validSymbol = Symbol();
    const p: MyPredicate = (s, n, sym) => s !== '' || n > 0 || sym === validSymbol;

    const notP: MyPredicate = not(p);

    expect(notP('', 0, Symbol())).toBe(!p('', 0, Symbol()));
    expect(notP('hola', 0, Symbol())).toBe(!p('hola', 0, Symbol()));
    expect(notP('', 1, Symbol())).toBe(!p('', 1, Symbol()));
    expect(notP('', 0, validSymbol)).toBe(!p('', 0, validSymbol));
  });
});
