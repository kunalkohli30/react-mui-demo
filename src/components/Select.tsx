import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiSelect = () => {

    const [country, setCountry] = useState<string[]>([]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log('value: ', value);
        setCountry(typeof value === 'string' ? value.split(',') : value);
    }
    return (
        <Box width='250px'>
            <TextField
                select
                label='Country'
                value={country}
                onChange={handleOnChange}
                SelectProps={{ multiple: true }}        //for multi select
                fullWidth
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect