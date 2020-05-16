const initialState = {
  test: 'eldo',
};

const rootReducer = (
  state = initialState,
  action,
) => {
  console.log(action);
  console.log(state);
  return state;
};

export default rootReducer;
