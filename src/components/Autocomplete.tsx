import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'


type Skill = {
    id: number
    label: string
}
const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
const skillsArray = skills.map((item: string, index: number): Skill => { return {id: index, label: item}})

const MuiAutocomplete = () => {

    const [value, setValue] = useState<string | null>('');
    const [skill, setSkill] = useState<Skill | null>(null);

    const hanldeOnChange = (event: SyntheticEvent<Element, Event>, newValue: string | null) => {
        setValue(newValue);
    }

    console.log('Selected skill value: ', value);
    console.log('Selected skillarray value: ', skill);
    return (
        <Stack width='250px' spacing={4}>
            <Autocomplete
                options={skills}
                renderInput={params => <TextField {...params} label='Skills' />}
                value={value}
                onChange={hanldeOnChange}
                freeSolo
            />
            <Autocomplete
                options={skillsArray}
                renderInput={params => <TextField {...params} label='Skills' />}
                value={skill}
                onChange={(event, newValue: Skill | null) => setSkill(newValue)}
            />
        </Stack>
    )
}

export default MuiAutocomplete