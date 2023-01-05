import { Box, Typography } from "@mui/material";
import StyledBox from "../styledComponents/styledBox";
interface Iprops{
    text:string,
    translate?:number
}
export default function Title(props:Iprops){
    return(
    <>
        <StyledBox sx={{transform:`translateY(${props.translate + 'em'})`, position:'relative', borderRadius:'5px', margin:'auto', zIndex:'3'}}>
            <Typography py="34px" fontSize='48px'>{props.text}</Typography>
        </StyledBox>
    </>)
}