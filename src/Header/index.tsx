import styled from 'styled-components';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Box } from '@mui/system';

const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  justify-content: center;
`

const Link = styled.div`
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
  }
  :selected {
    border: 1px solid black;
  }

  ${props => props.isSelected && `
    border: 1px solid black;
  `}
`

export default function Header() {
  return (
    <HeaderWrap>
      <Box sx={{ width: '980px', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }} textAlign="left" >
          <Link><HomeOutlinedIcon /><span>Home</span></Link>
          <Link><GroupOutlinedIcon /><span>My Friends</span></Link>
          <Link><PersonAddOutlinedIcon /><span>Random Pick</span></Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} textAlign="right" >
          <span>Gender: </span>
          <GenderButton isSelected>All</GenderButton>
          <GenderButton>M</GenderButton>
          <GenderButton>F</GenderButton>
        </Box>
      </Box>
    </HeaderWrap>
  );
}