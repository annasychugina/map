export default (state = {}, action) => {
  switch (action.type) {
    case 'REVIEW_SAVED':
      const { id, ...data } = action.baloon;
      const currentValues = state[id] || [];

      return {
        ...state,
        [id]: [...currentValues, data]
      };
      break;
    default:
      return state;
  }
}