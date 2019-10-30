type Mapper<T, K extends keyof T> = (item: T) => T[K];
type Filter<T> = (item: T) => boolean;

export function by<T, K extends keyof T>(prop: K): Mapper<T, K>;
export function by<T, K extends keyof T>(prop: K, value: T[K] | null | undefined): Filter<T>;
export function by<T, K extends keyof T>(prop: K, value?: T[K]): Mapper<T, K> | Filter<T> {
  if (arguments.length === 1) {
    return (item: T) => item[prop];
  }

  return (item: T) => item[prop] === value;
}
