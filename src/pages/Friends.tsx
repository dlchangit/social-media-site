import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { ContentWrap, PageContentTop, PageWrap } from "./style"
import { ImageAvatar, SelectionButtonList } from "../components/";
import { setUserPerRow, setDisplayBestFriendsOnly } from "../actions";
import { Link } from "react-router-dom";

export default function Friends() {
    const userData = useSelector((state:RootState) => state.userData);
    const selectedGender = useSelector((state:RootState) => state.gender);
    const userPerRow = useSelector((state:RootState) => state.userPerRow);
    const displayBestFriendsOnly = useSelector((state:RootState) => state.displayBestFriendsOnly);
    const bestFriends = useSelector((state:RootState) => state.bestFriends);
    const friends = useSelector((state:RootState) => state.friends);
    const [friendsList, setFriendsList] = useState([] as any);
    const [bestFriendsList, setBestFriendsList] = useState([] as any);

    useEffect(() => {
        if(friends.length > 0) {
            setFriendsList((userData.filter((it: any) => friends.includes(it.login.uuid))));
        }
        if(bestFriends.length > 0) {
            setBestFriendsList((userData.filter((it: any) => bestFriends.includes(it.login.uuid))));
        }
    }, [])

    // const dispatch = useDispatch();
    const userPerRowSelection = [5, 10, 15];
    const bestFriendsSelection = ['Yes', 'No'];
    return(
        <PageWrap>
            <ContentWrap>
            {/* <Stack direction="row" spacing={1}> */}
            <div style={{display: 'flex', justifyContent: 'end', marginBottom: '10px'}}>
                <SelectionButtonList title='Best friends only' selection={bestFriendsSelection} selectedOption={displayBestFriendsOnly} action={setDisplayBestFriendsOnly}  />
            </div>
            <PageContentTop>
                <span className='title'>Friends</span>
                <SelectionButtonList title='User per row' selection={userPerRowSelection} selectedOption={userPerRow} action={setUserPerRow}  />
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }} textAlign="right" >
                    <span>User per row: </span>
                    {userPerRowSelection.map((it: number, idx: number) => 
                        <UserPerRowButton key={idx} onClick={() => dispatch(setUserPerRow(it))} isSelected={userPerRow === it}>
                            {it}
                        </UserPerRowButton>
                    )}
                </Box> */}
            </PageContentTop>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }}>
                {displayBestFriendsOnly === 'No' && friendsList.map((it: any, idx: number) => {
                    if((selectedGender === 'M' && it.gender === 'male') || (selectedGender === 'F' && it.gender === 'female') || (selectedGender === 'All')) {
                        return (
                            <Grid key={idx} item xs={12/userPerRow}>
                                <Link to={'/user/' + it.login.uuid}>
                                    <ImageAvatar name={it.name.first + ' ' + it.name.last} imgSrc={it.picture.large} imgSize={800/userPerRow} />
                                </Link>
                            </Grid>
                        )
                    }
                }
                )}
                {displayBestFriendsOnly === 'Yes' && bestFriendsList.map((it: any, idx: number) => {
                    if((selectedGender === 'M' && it.gender === 'male') || (selectedGender === 'F' && it.gender === 'female') || (selectedGender === 'All')) {
                        return (
                            <Grid key={idx} item xs={12/userPerRow}>
                                <Link to={'/user/' + it.login.uuid}>
                                    <ImageAvatar name={it.name.first + ' ' + it.name.last} imgSrc={it.picture.large} imgSize={800/userPerRow} />
                                </Link>
                            </Grid>
                        )
                    }
                }
                )}
            </Grid>
                
            </ContentWrap>
        </PageWrap>
    );
}