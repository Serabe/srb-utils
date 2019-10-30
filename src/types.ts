export type Filter<T> = (item: T) => boolean;
export type Mapper<T, K extends keyof T> = (item: T) => T[K];
export type Predicate<T extends any[]> = (...args: T) => boolean;
