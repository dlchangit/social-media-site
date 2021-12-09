import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGender } from '../actions'
import { RootState } from '..';
import { useLocation } from 'react-router-dom'

const HeaderWrap = styled.div`
  padding-top: 25px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 4px #EEEEEE
`

const Link = styled.a<{isCurrentPage?: boolean}>`
  text-decoration: none;
  color: black;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 150px;
  cursor: poiner;
  :hover {
    border-bottom: 2px solid black;
  }
  span {
    margin-left: 5px;
  }
  ${props => props.isCurrentPage && `
    border-bottom: 2px solid black;
    :hover {
      cursor: auto;
    }
  `}
`

const GenderButton = styled.button<{isSelected?: boolean}>`
  margin-left: 5px;
  Background-color: white;
  border: 1px solid transparent;

  :hover {
    border: 1px solid black;
    cursor: pointer;
  }
  :selected {
    border: 1px solid black;
  }

  ${props => props.isSelected && `
    border: 1px solid black;
    :hover {
      cursor: auto;
    }
  `}
`

export default function Header() {
  const location = useLocation();
  const selectedGender = useSelector((state:RootState) => state.gender);
  const dispatch = useDispatch();
  // const [gender, setGender] = useState<String>(selectedGender);
  return (
    <HeaderWrap>
      <Box sx={{ width: '980px', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }} textAlign="left" >
          <Link href="/" isCurrentPage={location.pathname === '/'}><HomeOutlinedIcon /><span>Home</span></Link>
          <Link href="/friends" isCurrentPage={location.pathname === '/friends'}><GroupOutlinedIcon /><span>My Friends</span></Link>
          <Link href="/random" isCurrentPage={location.pathname === '/random'}><PersonAddOutlinedIcon /><span>Random Pick</span></Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} textAlign="right" >
          <span>Gender: </span>
          <GenderButton onClick={() => dispatch(setGender('All'))} isSelected={selectedGender === 'All'}>All</GenderButton>
          <GenderButton onClick={() => dispatch(setGender('M'))} isSelected={selectedGender === 'M'}>M</GenderButton>
          <GenderButton onClick={() => dispatch(setGender('F'))} isSelected={selectedGender === 'F'}>F</GenderButton>
        </Box>
      </Box>
    </HeaderWrap>
  );
}