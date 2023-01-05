import { Box, Stack, Typography } from '@mui/material'
import Screen from '../assets/Images/Screen.jpg'

export default function Header(){
    return(
    <>
    <Stack sx={{ flexDirection:'column', alignItems:'center'}}>

        <Box 
        component='img' 
        src={Screen} 
        sx={{width:'100%', position:'fixed', zIndex:-10}}/>
        <Box sx={{width:'100%', bgcolor:'#393D3F', opacity:'30%', position:'fixed', zIndex:-10}}/>
        <Box sx={{textAlign:'center', pt:'6em', color:'#FFFFFF', margin:26}}>
            <Typography fontSize={96}>
                Luis Diaz
            </Typography>
            <Typography fontSize={32}>
                Front-end developer
            </Typography>   
        </Box>
    </Stack>
             
    </>
    )
}