import reducer, { authActions } from './auth-slice';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isLoggedIn: true,
    isAdmin: true,
  });
});

test('state should change in logout', () => {
  const initialState = { isLoggedIn: true, isAdmin: true };

  expect(reducer(initialState, authActions.logout())).toEqual({
    isLoggedIn: false,
    isAdmin: true,
  });
});
