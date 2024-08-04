// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const removeUser = () => ({
    type: REMOVE_USER
})



// thunks
export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (data.errors) {
        return;
    }
    dispatch(setUser(data))

}

export const login = (emailAddress, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailAddress,
            password
        })
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(setUser(data));
    return {};
}

export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout", {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    dispatch(removeUser());
};


export const signUp = (name, companyName, isVendor, summary, emailAddress, password) => async (dispatch)=> {
    // console.log(isVendor)
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            companyName,
            isVendor,
            summary,
            emailAddress,
            password
        }),
    });
    const data = await response.json();
    dispatch(setUser(data));
}

export const updateProfile = (name, companyName, isVendor, summary, emailAddress, password) => async (dispatch)=> {
    const response = await fetch("/api/auth/updateprofile", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            companyName,
            isVendor,
            summary,
            emailAddress,
            password
        }),
    });
    const data = await response.json();
    dispatch(setUser(data));
}

export const sendMeetingReq = (sendUserId, recUserId, message, accepted) => async (dispatch)=> {
    const response = await fetch("/api/users/sendMeetingReq", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            sendUserId,
            recUserId,
            message,
            accepted
        }),
    });
    const data = await response.json();
    dispatch(setUser(data));
    return "success";
};

export const changeMeetingReq = (accepted, id) => async (dispatch)=> {
    const response = await fetch("/api/auth/updatemeeting", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            accepted,
            id
        }),
    });
    const data = await response.json();

    dispatch(setUser(data));
}


// reducer

const initialState = { user: null };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload };
        case REMOVE_USER:
            return { user: null };
        default:
            return state;
    }
}
