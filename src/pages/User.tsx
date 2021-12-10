import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "..";
import { ContentWrap, PageContentTop, UserPerRowButton, PageWrap } from "./style"

export default function User() {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(location.pathname.split('/')[2]);
    const [userProfile, setUserProfile] = useState([]);
    const userData = useSelector((state:RootState) => state.userData);

    useEffect(() => {
        setUserProfile(userData.filter((it: any) => it.login.uuid === currentUser))
    }, [currentUser, userData])
    
    return(
        <PageWrap>User</PageWrap>
    );
}