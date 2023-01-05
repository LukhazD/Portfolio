import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import PortfolioItem from "./PortfolioCardItem";

export default function Portfoliosection(){
    return(
        <>
            <Stack sx={{
                bgcolor:"#546A7B", 
                width:'100%', 
                height:'47em', 
                flexDirection:'row', 
                alignItems:'center', 
                justifyContent:'space-evenly', 
                paddingY:'3em'}}>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >

                    <PortfolioItem  text="lorem"/>
                    
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  >
                    <PortfolioItem translate={4} text="lorem"/>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                    <PortfolioItem  text="lorem"/>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  >
                    <PortfolioItem translate={4} text="lorem"/>
                </motion.div>
                
            </Stack>

        </>
    )
}