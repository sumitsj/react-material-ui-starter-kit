import { createAction } from '..';

describe('Utils', () => {
  it('should return action creator for specified action type', () => {
    expect(createAction('SOME_ACTION_TYPE')('test')).toEqual({
      type: 'SOME_ACTION_TYPE',
      payload: 'test',
    });
  });
});
