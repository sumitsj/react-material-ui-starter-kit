import { createAction } from '../../utils';

export const ACTION_TYPES = {
  LOGIN_REQUESTED: 'LOGIN_REQUESTED',
  LOGIN_SUCCEEDED: 'LOGIN_SUCCEEDED',
  LOGIN_FAILED: 'LOGIN_FAILED',
};

export const login = createAction(ACTION_TYPES.LOGIN_REQUESTED);
export const loginSuccess = createAction(ACTION_TYPES.LOGIN_SUCCEEDED);
export const loginFailure = createAction(ACTION_TYPES.LOGIN_FAILED);
