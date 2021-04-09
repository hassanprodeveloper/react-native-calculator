const updateUser1 = (data) =>{
    return (dispatch) => {
        dispatch({type: "SET_USER1", payload: data})
    }
}


export {
    updateUser1,
}