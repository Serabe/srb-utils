import { Filter, Mapper } from '../types';

/**
 * Function to map or filter by a given property.
 *
 * @example
 * const books = [{ title: 'Moby Dick' }, { title: 'Dracula' }, { title: 'Don Quixote' }];
 *
 * console.log(collection.find(by('title', 'Dracula')));
 * console.log(collection.map(by('title')));
 *
 * @param prop name of the property to either retrieve or match.
 * @param [value] value the property should match.
 */
export function by<T, K extends keyof T>(prop: K): Mapper<T, K>;
export function by<T, K extends keyof T>(prop: K, value: T[K] | null | undefined): Filter<T>;
export function by<T, K extends keyof T>(prop: K, value?: T[K]): Mapper<T, K> | Filter<T> {
  if (arguments.length === 1) {
    return (item: T) => item[prop];
  }

  return (item: T) => item[prop] === value;
}
