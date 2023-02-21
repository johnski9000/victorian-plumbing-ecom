import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating(data) {
  return (
    <Stack spacing={1}>
      {/* <Rating name="half-rating-read" defaultValue={data.notPrecise} 
      precision={0.1}
       readOnly /> */}
       <Rating name="read-only" value={data.notPrecise} readOnly />
    </Stack>
  );
}