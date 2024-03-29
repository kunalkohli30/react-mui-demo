import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {

    const [value, setValue] = useState<number | null>(null);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number|null) => {
        setValue(newValue);
    }
    console.log('Rating value: ', value);
    return (
        <Stack>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size='large'
                icon={<FavoriteIcon fontSize='inherit'/>}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
                highlightSelectedOnly       //only clicked icon is highlighted instead of all the icons before it. Can be used for tsaking feedback using emojis
            />
        </Stack>
    )
}

export default MuiRating