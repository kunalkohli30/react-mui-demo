import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {

    const [formats, setFormats] = useState<string[]>([]);
    console.log('formats: ', formats);
    const handleChangeForToggleButtonGroup = (event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        console.log('updateFormats: ', updatedFormats);
        setFormats(updatedFormats);
    }
    return (

        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='www.google.com'>Text</Button>
                <Button variant='contained'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' color='error'>Text</Button>
                <Button variant='contained' color='error'>Text</Button>
                <Button variant='outlined' color='error'>Outlined</Button>

                {/* colors - primary
                    secondary
                    warning
                    error
                    info
                    success */}
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='outlined' color='error' size='small'>Text</Button>
                <Button variant='outlined' color='error' size='medium'>Text</Button>
                <Button variant='outlined' color='error' size='large'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row' display='block'>
                <Button variant='contained' color='error' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation disableRipple>Send</Button>
                {/* disableElevation to remove tje shadow from buttons and disable ripple to disable ripple effect on click of button */}
                <IconButton>
                    <SendIcon color='warning' aria-label='send' fontSize='medium' />
                </IconButton>
                {/* Icon button is used when we just want to display the icon as button, nothing along this it. No text */}
            </Stack>

            <Stack direction='row' display='block'>
                <ButtonGroup variant='outlined' color='error' size='medium' orientation='vertical'>
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row' display='block'>
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleChangeForToggleButtonGroup}
                    size='small'
                    color='secondary'
                    exclusive       //used to restrict selection of 1 button out of grp at a time
                    orientation='vertical'
                >
                    <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButton