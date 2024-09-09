export const asyncMiddleware = (store) => (next) => (action) => {
  const { dispatch } = store;
  if (action.promise && action.promise instanceof Promise) {
    action.promise.then((result) => {
      dispatch({ type: action.success, payload: result });
    });
  } else return next(action);
};
