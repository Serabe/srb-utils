import { Mapper, Predicate } from './types';

/**
 * Helper function for enumerable functions that expect a predicate or a mapper.
 * Lets the user pass a function that will match a given field against a given value, or a function
 * that will return a given field.
 *
 * @example
 * const collection = [{ name: 'Lisa' }, { name: 'Jae' }, { name: 'Sergio '}];
 *
 * console.log(collection.find(by('name', 'Lisa')));
 * console.log(collection.map(by('name')));
 *
 * @param field name of the field to match
 * @param value value to match field against
 */
export function by<T, U extends keyof T>(field: U): Mapper<T, U>;
export function by<T, U extends keyof T>(field: U, value: T[U]): Predicate<T>;
export function by<T, U extends keyof T>(
  field: U,
  value?: T[U]
): Mapper<T, U> | Predicate<T> {
  if (arguments.length === 1) {
    return item => item[field];
  }

  return item => item[field] === value;
}
