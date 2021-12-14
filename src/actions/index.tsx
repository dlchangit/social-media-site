export const setGender = (gender: string) => {
    return {
        type: 'SET_GENDER',
        payload: gender
    };
};

export const setUserPerRow = (numnber: number) => {
    return {
        type: 'SET_USER_PER_ROW',
        payload: numnber
    };
};

export const setUserData = (data: []) => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
};

export const setMessage = (data: any) => {
    return {
        type: 'SET_MESSAGE',
        payload: data
    }
};

export const setFriends = (data: any) => {
    return {
        type: 'SET_FRIENDS',
        payload: data
    }
};

export const setBestFriends = (data: any) => {
    return {
        type: 'SET_BEST_FRIENDS',
        payload: data
    }
};

export const setDisplayBestFriendsOnly = (data: any) => {
    return {
        type: 'SET_DISPLAY_BEST_FRIENDS_ONLY',
        payload: data
    }
};