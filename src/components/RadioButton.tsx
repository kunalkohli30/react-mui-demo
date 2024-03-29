import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const MuiRadioButton = () => {

    const [value, setValue] = useState('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    console.log('radio button element: ', value);
    return (
        <Box>
            <FormControl>
                <FormLabel>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name='job-experience-group'
                    value={value}
                    onChange={handleOnChange}
                    row
                >
                    <FormControlLabel
                        control={<Radio color='secondary'/>}
                        label='0-2'
                        value='0-2'
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='3-5'
                        value='3-5'
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='5-10'
                        value='5-10'
                    />
                </RadioGroup>
                <FormHelperText>Invalid Selection</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default MuiRadioButton