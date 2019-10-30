import { Predicate } from '../types';

export const not = <T extends any[]>(fn: Predicate<T>): Predicate<T> => {
  return (...args: T) => !fn(...args);
};
