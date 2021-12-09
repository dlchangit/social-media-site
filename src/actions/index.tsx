export const setGender = (gender: string) => {
    return {
        type: 'SET_GENDER',
        payload: gender
    };
};