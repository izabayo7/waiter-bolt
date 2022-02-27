export const setAuthUser = (user) => {
    return {
        type: 'SET_AUTH_USER',
        payload: user,
    }
}


export const setCurrSchool = (school) => {
    return {
        type: 'SET_CURR_SCHOOL',
        payload: school,
    }
}