import { Predicate } from '../types';

/**
 * Given a predicate (a function that returns a boolean), creates a new
 * predicate that is the negation of the passed one.
 *
 * @example
 * const even = num => num % 2 === 0;
 * const odd = not(even);
 *
 * @param fn predicate
 */
export const not = <T extends any[]>(fn: Predicate<T>): Predicate<T> => {
  return (...args: T) => !fn(...args);
};
