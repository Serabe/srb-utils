export type Mapper<T, U extends keyof T> = (item: T) => T[U];
export type Predicate<T> = (item: T) => boolean;
