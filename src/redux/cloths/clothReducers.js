import { BUY_CLOTH } from "./clothTypes";

const initialState = {
  numOfCloths: 30,
};
const clothReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CLOTH:
      return {
        ...state,
        numOfCloths: state.numOfCloths - 1,
      };
    default:
      return state;
  }
};

export default clothReducer;
