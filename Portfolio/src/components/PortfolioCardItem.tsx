import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Iprops{
    text?:string,
    translate?:number
}

export default function PortfolioItem(props: Iprops){
    return(
    <>
        <Box sx={{
            display:'flex', 
            alignItems:'flex-end', 
            minWidth:'20em', 
            minHeight:'35em', 
            backgroundColor:'#D9D9D9', 
            cursor:'pointer', 
            borderRadius:'5px'}}>

            <Box sx={{backgroundColor:'#97A2AA', borderRadius:'0px 0px 5px 5px', width:'100%', height:'5em', textAlign:'center'}}>

                <Typography fontSize={24} py="1em">

                    {props.text}

                </Typography>

            </Box>

        </Box>  

    </>
    )
}