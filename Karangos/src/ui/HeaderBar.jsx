import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/karangos-logo-600px.png'
import mainMenu from './mainMenu'

export default function HeaderBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" enableColorOnDark>
                <Toolbar variant="dense">
                    
                    <Typography variant="h6" color="inherit" component="div">
                        <img src = {logo} alt = {"Logotipo Karangos"} style = {{width: '300px'}} />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}