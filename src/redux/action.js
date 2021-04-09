const setHistory = (data) => {
  return (dispatch) => {
    dispatch({type: 'SET_HISTORY', payload: data});
  };
};

export {setHistory};
