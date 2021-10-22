/**
 * Binds a method to the current instance.
 */
// tslint:disable-next-line:ban-types
export function bind<T extends Function>(
  _: object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void {
  return {
    configurable: true,
    get(this: T): T {
      // @ts-ignore
      // tslint:disable-next-line: no-this
      const value = descriptor.value.bind(this);
      // tslint:disable-next-line: no-expression-statement no-this
      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value,
        writable: true
      });
      return value;
    }
  };
}
