export const updateStore = (
  varToUpdate,
  value,
) => ({
  type: 'UPDATE_STORE',
  payload: {
    varToUpdate,
    value,
  },
});
