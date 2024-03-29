import { Stack, TextField, InputAdornment, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'

const MuiTextField = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [formInputValue, setFormInputValue] = useState<string | null>(null);

    const handleVisibilityOnClick = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2} display='block'>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2} display='block'>
                <TextField
                    label='Password'
                    color='secondary'
                    size='small'
                    required        //Adds * after the label
                    helperText='Do not share your password'
                    type='password'
                // disabled
                />
                <TextField label='Read Only' InputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction='row' >

                {/* startAdornment is used to fix something at start of textfield and endAdornment is used for fixing at end. Please check weight and 
                Amount textfield to understand this. Andornment is provided inside InputProps prop of TextField component. */}
                <TextField
                    label='Amount'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                />
                <TextField
                    label='Weight'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                    }}
                />
                <TextField
                    label='password'
                    type={isPasswordVisible ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <IconButton onClick={handleVisibilityOnClick}>
                                {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />

                <TextField
                    label='form input'
                    value={formInputValue}
                    onChange={e => setFormInputValue(e.target.value)}
                    helperText={formInputValue ? 'Do not share password with anyone' : 'Password is required'}
                    required
                    error={formInputValue ? false : true}       //error prop turns the textfield into red outline depicting an error
                />
            </Stack>
        </Stack>
    )
}

export default MuiTextField