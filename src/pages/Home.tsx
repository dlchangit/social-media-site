import { Grid, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { ContentWrap, PageWrap } from "./style"
import ImageAvatar from "../components/ImageAvatar"

export default function Home() {
    const userData = useSelector((state:RootState) => state.userData);
    const selectedGender = useSelector((state:RootState) => state.gender);
    const userPerRow = useSelector((state:RootState) => state.userPerRow);
    console.log(12/userPerRow)
    return(
        <PageWrap>
            <ContentWrap>
            {/* <Stack direction="row" spacing={1}> */}
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }}>
                {userData.map((it: any, idx: number) => {
                    if(selectedGender === 'M' && it.gender === 'male' || selectedGender === 'F' && it.gender === 'female' || selectedGender === 'All') {
                        return (
                            <Grid key={idx} item xs={12/userPerRow}>
                                <ImageAvatar name={it.name.first + ' ' + it.name.last} imgSrc={it.picture.large} imgSize={800/userPerRow} />
                            </Grid>
                        )
                    }
                }
                )}
            </Grid>
            {/* </Stack> */}
                
            </ContentWrap>
        </PageWrap>
    );
}