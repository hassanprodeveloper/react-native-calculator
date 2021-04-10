const setHistory = (data) => {
  return (dispatch) => {
    dispatch({type: 'SET_HISTORY', payload: data});
  };
};

const clearAllHistory = () => {
  return (dispatch) => {
    dispatch({type: 'CLEAR_ALL'});
  };
};

export {setHistory, clearAllHistory};
