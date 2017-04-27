export default (state = {}, action) => {
  switch (action.type) {
    case 'REVIEW_SAVED':
      const { coords, ...rest } = action.data;
      const currentValues = state[coords.join('')] || [];

      return {
        ...state,
        [coords.join('')]: [...currentValues, action.data]
      };
      break;
    default:
      return state;
  }
}