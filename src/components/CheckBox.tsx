import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import React, { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const MuiCheckBox = () => {

    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);

    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        var skillsCopy = [...skills];
        skillsCopy = skills.includes(event.target.value) ? skillsCopy.filter(skill => skill !== event.target.value) : [...skillsCopy, event.target.value]
        console.log('skills cahnge: ', skillsCopy);
        setSkills(skillsCopy);
    }

    console.log('checked?: ', acceptTnC);
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={
                        <Checkbox
                            checked={acceptTnC}
                            onChange={e => setAcceptTnC(e.target.checked)}
                        />
                    }
                />
            </Box>
            <Box>
                <Checkbox
                    checked={acceptTnC}
                    onChange={e => setAcceptTnC(e.target.checked)}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='HTML'
                            value='html'
                            control={<Checkbox
                                checked={skills.includes('html')}
                                onChange={handleSkillsChange} size='small' color='secondary' />}
                        />
                        <FormControlLabel
                            label='CSS'
                            value='css'
                            control={<Checkbox
                                checked={skills.includes('css')}
                                onChange={handleSkillsChange} />}
                        />
                        <FormControlLabel
                            label='JavaScript'
                            value='javascript'
                            control={<Checkbox
                                checked={skills.includes('javascript')}
                                onChange={handleSkillsChange} />}
                        />
                    </FormGroup>
                    <FormControlLabel
                            label='JavaScript'
                            value='javascript'
                            control={<Switch
                                checked={isSwitchChecked}
                                onChange={(event) => setIsSwitchChecked(event.target.checked)} />}
                        />
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckBox