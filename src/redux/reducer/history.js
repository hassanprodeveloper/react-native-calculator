const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  // console.log("action", action)
  switch (action.type) {
    case 'SET_HISTORY':
      return [action.payload,...state];
  }
  return state;
};
