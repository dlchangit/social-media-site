import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';

interface ImageAvatarProps {
  name: string,
  imgSrc: string
  imgSize: number,
}

export default function ImageAvatar(props: ImageAvatarProps) {
  
  return (
    <Tooltip title={props.name} arrow >
      <Avatar
        alt={props.name}
        src={props.imgSrc}
        sx={{ width: props.imgSize, height: props.imgSize }}
      />
    </Tooltip>
  );
}