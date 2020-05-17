const initialState = {
  checkboxes: ['id', 'name', 'surname'],
  number: 10,
  fileType: 'JSON',
  objCollection: {
    name: false,
    surname: false,
  },
};

const rootReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'UPDATE_STORE':
      return {
        ...state,
        [action.payload.varToUpdate]:
          action.payload.value,
      };
    default:
      return state;
  }
};

export default rootReducer;