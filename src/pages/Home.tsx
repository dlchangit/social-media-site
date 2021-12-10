import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { ContentWrap, PageContentTop, UserPerRowButton, PageWrap } from "./style"
import ImageAvatar from "../components/ImageAvatar"
import { setUserPerRow } from "../actions";
import { Link } from "react-router-dom";

export default function Home() {
    const userData = useSelector((state:RootState) => state.userData);
    const selectedGender = useSelector((state:RootState) => state.gender);
    const userPerRow = useSelector((state:RootState) => state.userPerRow);
    const dispatch = useDispatch();
    const userPerRowSelection = [5, 10, 15];
    return(
        <PageWrap>
            <ContentWrap>
            {/* <Stack direction="row" spacing={1}> */}
            <PageContentTop>
                <span className='title'>All Users</span>
                <Box sx={{ display: 'flex', alignItems: 'center' }} textAlign="right" >
                    <span>User per row: </span>
                    {userPerRowSelection.map((it: number, idx: number) => 
                        <UserPerRowButton key={idx} onClick={() => dispatch(setUserPerRow(it))} isSelected={userPerRow === it}>
                            {it}
                        </UserPerRowButton>
                    )}
                </Box>
            </PageContentTop>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }}>
                {userData.map((it: any, idx: number) => {
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