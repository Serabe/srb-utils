import { by } from '../../src/srb-utils';

interface OhMy {
  hola: string;
  adios: number | null | undefined;
}

describe('by', () => {
  describe('mapper', () => {
    test('maps values by property', () => {
      const initial: OhMy[] = [{ hola: 'hola', adios: 2 }, { hola: 'adios', adios: 1 }];

      const stringArray: string[] = initial.map(by('hola'));
      expect(stringArray).toEqual(['hola', 'adios']);

      const numberArray: (number | null | undefined)[] = initial.map(by('adios'));
      expect(numberArray).toEqual([2, 1]);
    });
  });

  describe('filter', () => {
    test('filters properties by values', () => {
      const initial: OhMy[] = [
        { hola: 'hola', adios: 2 },
        { hola: 'adios', adios: 1 },
        { hola: 'holi', adios: 2 }
      ];

      const result: OhMy[] = initial.filter(by('adios', 2));

      expect(result).toEqual([{ hola: 'hola', adios: 2 }, { hola: 'holi', adios: 2 }]);
    });

    test('filters null properties', () => {
      const initial: OhMy[] = [
        { hola: 'hola', adios: 2 },
        { hola: 'adios', adios: null },
        { hola: 'holi', adios: undefined }
      ];

      const result: OhMy[] = initial.filter(by('adios', null));

      expect(result).toEqual([{ hola: 'adios', adios: null }]);
    });

    test('filters null properties', () => {
      const initial: OhMy[] = [
        { hola: 'hola', adios: 2 },
        { hola: 'adios', adios: null },
        { hola: 'holi', adios: undefined }
      ];

      const result: OhMy[] = initial.filter(by('adios', undefined));

      expect(result).toEqual([{ hola: 'holi', adios: undefined }]);
    });
  });
});
