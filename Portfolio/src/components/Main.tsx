import { Box } from "@mui/material";
import AbilityCards from "./AbilityCards";
import Portfoliosection from "./Portfoliosection";


import Title from "./Title";

export default function Main(){
    return(
        <>
        <Box sx={{}}>
            <Title text='Abilities' translate={4.6}/> 

            <Box bgcolor='#393D3F' width='100%' height='22em' position='relative' top='10%'>
                
                <AbilityCards />

                <Title text='Projects' translate={12}/>

            </Box>
            
            <Portfoliosection/>
            </Box>            
        </>
    )
}