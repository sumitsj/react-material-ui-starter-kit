import { login, loginFailure, loginSuccess } from '../Login.actions';

describe('Login Actions', () => {
  const dispatch = jest.fn();

  it('should return action object for login requested', () => {
    const username = 'sumitsj';
    const password = 'Abcd@123';

    dispatch(login({ username, password }));

    const expectedAction = { payload: { username, password }, type: 'LOGIN_REQUESTED' };
    expect(dispatch).toHaveBeenLastCalledWith(expectedAction);
  });

  it('should return action object for login success', () => {
    const response = { status: 200 };

    dispatch(loginSuccess(response));

    const expectedAction = { payload: response, type: 'LOGIN_SUCCEEDED' };
    expect(dispatch).toHaveBeenLastCalledWith(expectedAction);
  });

  it('should return action object for login failure', () => {
    const response = { status: 401 };

    dispatch(loginFailure(response));

    const expectedAction = { payload: response, type: 'LOGIN_FAILED' };
    expect(dispatch).toHaveBeenLastCalledWith(expectedAction);
  });
});
