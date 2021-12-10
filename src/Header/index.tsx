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
import { Link } from 'react-router-dom';

const HeaderWrap = styled.div`
  padding-top: 25px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 4px #EEEEEE;
  position: fixed;
  z-index: 100;
  background-color: #FFFFFF;

  .menu-item {
    text-decoration: none;
  }
`

const LinkContent = styled.div<{isCurrentPage?: boolean, isHover?: boolean}>`
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

${props => props.isHover && `
    border-bottom: 2px solid black;
  `}
`

const GenderButton = styled.button<{isSelected?: boolean}>`
  width: 30px;
  margin-left: 5px;
  background-color: white;
  border: 1px solid transparent;

  :hover {
    border: 1px solid black;
    cursor: pointer;
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
  const [hoverLink, setHoverLink] = useState('');
  const dispatch = useDispatch();
  const genderSelection = ['All', 'M', 'F'];
  // const [gender, setGender] = useState<String>(selectedGender);

  const onMouseOutLink = () => {
    setHoverLink('');
  }

  return (
    <HeaderWrap>
      <Box sx={{ width: '980px', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }} textAlign="left" >
          <Link to="/" className="menu-item">
            <LinkContent isCurrentPage={location.pathname === '/' && hoverLink === ''} isHover={hoverLink === '/'} onMouseOver={() => setHoverLink('/')} onMouseOut={() => onMouseOutLink()}>
              <HomeOutlinedIcon />
              <span>Home</span>
            </LinkContent>
          </Link>
          <Link to="/friends" className="menu-item">
            <LinkContent isCurrentPage={location.pathname === '/friends' && hoverLink === ''} isHover={hoverLink === '/friends'} onMouseOver={() => setHoverLink('/friends')} onMouseOut={() => onMouseOutLink()}>
              <GroupOutlinedIcon />
              <span>My Friends</span>
            </LinkContent>
          </Link>
          <Link to="/random" className="menu-item">
            <LinkContent isCurrentPage={location.pathname === '/random' && hoverLink === ''} isHover={hoverLink === '/random'} onMouseOver={() => setHoverLink('/random')} onMouseOut={() => onMouseOutLink()}>
              <PersonAddOutlinedIcon />
              <span>Random Pick</span>
            </LinkContent>
          </Link>
        </Box>
        {location.pathname.indexOf('/user') === -1 && (
          <Box sx={{ display: 'flex', alignItems: 'center' }} textAlign="right" >
            <span>Gender: </span>
            {genderSelection.map((it: string, idx: number) =>
                <GenderButton key={idx} onClick={() => dispatch(setGender(it))} isSelected={selectedGender === it}>
                {it}
              </GenderButton>
            )}
          </Box>
        )}
      </Box>
    </HeaderWrap>
  );
}