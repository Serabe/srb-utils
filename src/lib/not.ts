/**
 * Return the negation of the passed predicate
 *
 * @param f predicate
 */
export const not = <T extends readonly any[]>(
  f: (...args: T) => boolean
): ((...args: T) => boolean) => {
  return (...args: T) => !f(...args);
};
