import { useLocation } from "react-router-dom";
import { ContentWrap, PageContentTop, UserPerRowButton, PageWrap } from "./style"

export default function User() {
    const location = useLocation();
    
    return(
        <PageWrap>User</PageWrap>
    );
}