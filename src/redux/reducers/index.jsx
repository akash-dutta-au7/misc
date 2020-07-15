import { INC_NUMBER } from '../actions';

const initState = {
  number: 0,
};
const performAction = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case INC_NUMBER:
      console.log(state, action);
      return { ...state, number: state.number + 1 };
    default:
      return state;
  }
};

export default performAction;
