import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiCard = () => {
    return (
        <Box>
            <Card sx={{ width: '300px' }}>
                <CardMedia
                    component='img'
                    height='140'
                    alt='unsplash-img'
                    image='https://source.unsplash.com/random'>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Does the card component give any advantages over just making the stuff using Box and normal HTML image tags? I understand that the props seem more intuitive, but then again, its additional props to learn
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' variant='contained'>Share</Button>
                    <Button size='small' variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard