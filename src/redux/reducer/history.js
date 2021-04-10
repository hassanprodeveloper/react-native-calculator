const INITIAL_STATE = [
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
  {exp: '20+2', res: '22'},
];

export default (state = INITIAL_STATE, action) => {
  // console.log("action", action)
  switch (action.type) {
    case 'SET_HISTORY':
      return [action.payload, ...state];
    case 'CLEAR_ALL':
      return [];
  }
  return state;
};
