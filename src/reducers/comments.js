export default (state = [], action) => {
  switch (action.type) {
    case 'REVIEW_SAVED':
        return [...state, action.data]
      break;
    default:
      return state;
  }
}