import * as React from 'react';
import Avatar from '@mui/material/Avatar';

interface ImageAvatarProps {
  altText: string,
  imgSrc: string
  imgSize: number,
}

export default function ImageAvatar(props: ImageAvatarProps) {
  
  return (
    <Avatar
      alt={props.altText}
      src={props.imgSrc}
      sx={{ width: props.imgSize, height: props.imgSize }}
    />
  );
}