
const INITIAL_STATE = {
    // user:{
        name: "Guest",
        // email:"guestR1@native.pro",
    // }
}

export default (state = INITIAL_STATE , action) => {
    console.log("action", action)
    switch (action.type) {
        case "SET_USER1":
            return({
                ...state,
                name: action.payload
            })
    }
            return state;
}