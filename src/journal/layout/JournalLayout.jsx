import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar, Sidebar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box 
        sx={{display: 'flex'}}
    >   
        <Navbar drawerWidth={drawerWidth}/>

        <Sidebar drawerWidth={drawerWidth} />

        <Box 
            component='main'
            sx={{
                flexGrow: 1,
            }}
        >

            <Toolbar />

            { children }
        </Box>
    </Box>
  )
}
    