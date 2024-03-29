import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1' gutterBottom>heading h1</Typography>
        <h1>heading 1 with h1</h1>
        <Typography variant='h2' >heading h2</Typography>
        <Typography variant='h3'>heading h3</Typography>
        <Typography variant='h4'>heading h4</Typography>
        <Typography variant='h5'>heading h5</Typography>
        <Typography variant='h6'>heading h6</Typography>
        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='subtitle2'>subtitle2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt in minima? Suscipit vel dicta ipsam veritatis repudiandae odio sequi earum reprehenderit ut, sed consequuntur porro quas neque dolores blanditiis!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium incidunt in minima? Suscipit vel dicta ipsam veritatis repudiandae odio sequi earum reprehenderit ut, sed consequuntur porro quas neque dolores blanditiis!</Typography>
    </div>
  
  
   )
}

export default MuiTypography