export const setGender = (gender: string) => {
    return {
        type: 'SET_GENDER',
        payload: gender
    };
};

export const setUserData = (data: []) => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
}