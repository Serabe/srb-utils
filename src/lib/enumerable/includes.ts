/**
 * Helper function for enumerable functions that expect a predicate. This will check that the element includes a
 * given value.
 *
 * @example
 * const collection = ['Joe', 'Joey', 'Joel'];
 * console.log(collection.every(includes('Joe')));
 *
 * @param element Element to check inclusion of
 */
export const includes = <
  T,
  U extends { readonly includes: (element: T) => boolean }
>(
  element: T
): ((item: U, n: number, coll: readonly U[]) => boolean) => {
  return (el: U) => el.includes(element);
};
