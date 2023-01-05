import { Stack } from "@mui/material";
import GitIcon from "../assets/Icons/giticon";
import ReactIcon from "../assets/Icons/reacticon";
import SassIcon from "../assets/Icons/sassicon";
import VueIcon from "../assets/Icons/vueicon";

export default function AbilityCards(){
    return(
        <>
        <Stack sx={{flexDirection:'row', gap:2, width:'fit-content', transform:'translateY(7.8em)', margin:'auto'}}>
            <GitIcon/>
            <ReactIcon/>
            <SassIcon/>
            <VueIcon/>
        </Stack>
        </>
    )
}