import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { Link } from 'react-router-dom'
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{display:"flex", justifyContent:"space-between", p:2, width:"100%", fontFamily: "sans-serif" }}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon style={{ color: 'white'}}/>
          ) : (
            <LightModeOutlinedIcon style={{ color: 'white'}}/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon style={{ color: 'white'}}/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon style={{ color: 'white'}}/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon style={{ color: 'white'}}/>
        </IconButton>
        <IconButton
        to="/login" 
        className="topbar-btn"
        LinkComponent={Link}
        style={{ color: 'white'}}
        >Login</IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;