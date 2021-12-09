import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Box } from '@mui/system';
import { useState } from 'react';

const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 4px #EEEEEE
`

const Link = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 150px;
  :hover {
    border-bottom: 2px solid black;
  }
  span {
    margin-left: 5px;
  }
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
  const [gender, setGender] = useState<String>('All');
  return (
    <HeaderWrap>
      <Box sx={{ width: '980px', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }} textAlign="left" >
          <Link href="/"><HomeOutlinedIcon /><span>Home</span></Link>
          <Link href="/friends"><GroupOutlinedIcon /><span>My Friends</span></Link>
          <Link href="/random"><PersonAddOutlinedIcon /><span>Random Pick</span></Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} textAlign="right" >
          <span>Gender: </span>
          <GenderButton onClick={() => setGender('All')} isSelected={gender === 'All'}>All</GenderButton>
          <GenderButton onClick={() => setGender('M')} isSelected={gender === 'M'}>M</GenderButton>
          <GenderButton onClick={() => setGender('F')} isSelected={gender === 'F'}>F</GenderButton>
        </Box>
      </Box>
    </HeaderWrap>
  );
}