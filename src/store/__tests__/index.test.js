import { reducer } from '..';

describe('Store', () => {
  describe('Reducers', () => {
    it('should return current  state', () => {
      const state = {};
      expect(reducer(state, 'someAction')).toEqual(state);
    });
  });
});
