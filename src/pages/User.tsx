import React, {MutableRefObject} from 'react';
import { Analytics } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "..";
import { PageWrap } from "./style"
import { useDispatch } from 'react-redux';
import { setBestFriends, setFriends, setMessage } from '../actions';
import moment from "moment";

const UserProfileWrap = styled.div`
    padding-top: 20px;
    margin: 0 30px;
    width: 920px;
    display: flex;

    >:first-child {
        margin-right: 50px;
    }
`

const ProfilePhotoWrap = styled.div`
    width: 250px;
    min-width: 250px;
    height: 300px;
    border: 1px solid #EEEEEE;
    display: flex;
    flex-direction: column;
    img {
        margin: auto;
        border-radius: 64px;
    }
    div {
        margin: 20px 25px;
    }
`

const Button = styled.button`
    width: 200px;
    height: 30px;
    border: 1px solid #CCCCCC;
    margin: auto;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    transition: 0.3s;
    border-radius: 15px;
    :hover {
        background-color: #F2F2F2;
    }
`
const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const UserInfo = styled.div`
    margin-top: 20px;

    div {
        width: 350px;
        margin-bottom: 10px;

        span {
            float: right;
        }
    }
`

const Message = styled.div`
    margin-top: 30px;
    /* border-top: 1px solid #EEEEEE; */

    input {
        margin: 5px 0;
        width: 90%;
        height: 25px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        outline: none;
        padding-left: 10px;
        transition: 0.3s;
        :hover {
            background-color: #F2F2F2;
        }
    }
`

const MessageList = styled.div`
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #CCCCCC;
    width: 100%;
    div {
        width: 100%;
        margin-bottom: 10px;

        span {
            float: right;
        }
    }
`

export default function User() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(location.pathname.split('/')[2]);
    const [userProfile, setUserProfile] = useState({} as any);
    const [messageList, setMessageList] = useState([] as any);
    const [friendsList, setFriendsList] = useState([] as any);
    const [bestFriendsList, setBestFriendsList] = useState([] as any);
    // const inputField = MutableRefObject<HTMLInputElement>;
    const messageInput = useRef<HTMLInputElement>(null);
    // const [messageInput, setMessageInput] = useState('');
    const userData = useSelector((state:RootState) => state.userData);
    const message = useSelector((state:RootState) => state.userMsg);
    const bestFriends = useSelector((state:RootState) => state.bestFriends);
    const friends = useSelector((state:RootState) => state.friends);

    useEffect(() => {
        if(userData.length > 0) {
            setUserProfile((userData.filter((it: any) => it.login.uuid === currentUser))[0]);
        }
    }, [currentUser, message])

    useEffect(() => {
        if(message.length > 0) {
            setMessageList((message.filter((it: any) => it.uuid === currentUser)));
        }
        if(friends.length > 0) {
            setFriendsList((friends.filter((it: any) => it === currentUser)));
        }
        if(bestFriends.length > 0) {
            setBestFriendsList((bestFriends.filter((it: any) => it === currentUser)));
        }
    }, [currentUser, userData])

    const sendMessage = (event: any) => {
        if (event.key === "Enter") {
            const newMsgListForCurrent = [{
                message: event.target.value, 
                datetime: moment(new Date()).format('MM/DD/YYYY HH:mm'),
                uuid: currentUser
            }, ...messageList
            ];
            const newMsgListForAll = [{
                message: event.target.value, 
                datetime: moment(new Date()).format('MM/DD/YYYY HH:mm'),
                uuid: currentUser
            }, ...message
            ];
            setMessageList(newMsgListForCurrent);
            dispatch(setMessage(newMsgListForAll));
            if(messageInput?.current?.value ) messageInput.current.value = '';
        }
    }

    const addFriend = () => {
        const newFriendsListForCurrent = [currentUser, ...friendsList];
        const newFriendsListForAll = [currentUser, ...friends];
        setFriendsList(newFriendsListForCurrent);
        dispatch(setFriends(newFriendsListForAll));
    }

    const addBestFriend = () => {
        const newBestFriendsListForCurrent = [currentUser, ...bestFriendsList];
        const newBestFriendsListForAll = [currentUser, ...bestFriends];
        setBestFriendsList(newBestFriendsListForCurrent);
        dispatch(setBestFriends(newBestFriendsListForAll));
    }
    
    return(
        <PageWrap>
            {userProfile && (
                <UserProfileWrap>
                    <ProfilePhotoWrap>
                        <img src={userProfile?.picture?.large??'' } />
                        <div>
                            {friendsList.length === 0 && <Button onClick={addFriend}>Add Friend</Button>}
                            {friendsList.map((it:any, idx: number) => {
                                if(idx === friendsList.length - 1 && it !== currentUser) {
                                    return (<><Button>Add Friend</Button><Button key='0' onClick={addFriend}>Add Friend</Button></>);
                                }
                                if(it === currentUser && bestFriendsList.length > 0) {
                                    for(let i = 0; i < bestFriendsList.length; i++) {
                                        if(bestFriendsList[i] === currentUser) break;
                                        if(i === bestFriendsList.length - 1 && bestFriendsList[i] !== currentUser) {
                                            return (<Button key='0' onClick={addBestFriend}>Mark as best friend</Button>);
                                        }
                                    }
                                }
                            })}
                            {friendsList.length > 0 && bestFriendsList.length === 0 && <Button onClick={addBestFriend}>Mark as best friend</Button>}
                        </div>
                    </ProfilePhotoWrap>
                    <ContentRight>
                    <UserInfo>
                        <div>Name: <span>{userProfile?.name?.first + ' ' + userProfile?.name?.last}</span></div>
                        <div>Gender: <span>{userProfile?.gender === 'male'? 'Male': 'Female'}</span></div>
                        <div>Age: <span>{userProfile?.dob?.age}</span></div>
                        <div>Phone: <span>{userProfile?.phone}</span></div>
                        <div>Email: <span>{userProfile?.email}</span></div>
                    </UserInfo>
                    <Message>
                        <div>Leave a message:</div>
                        <input type='text' onKeyDown={sendMessage} ref={messageInput} />
                        <MessageList>
                            {messageList.map((it: any, idx: number) =>
                                <div key={idx}>- {it.message} <span>{it.datetime}</span></div>
                            )}
                            {/* {console.log(moment(new Date()).format('MM/DD/YYYY HH:mm'))} */}
                            
                        </MessageList>
                    </Message>
                    </ContentRight>
                </UserProfileWrap>
            )}
        </PageWrap>
    );
}