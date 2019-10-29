import React, { useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';

function MenuMUI () {

    const [anchorMenu, setMenuOpen] = useState(null);
    const handleMenu = ( event) =>  { setMenuOpen(event.currentTarget); }
    const handleClose = () => { setMenuOpen(null);}
    const menu = <MenuList>
        <Menu
            anchorEl={anchorMenu}
            open={ Boolean (anchorMenu)}
            onClose={ handleClose}>
            <MenuItem component={ Link } to ='/' onClick={handleClose}><HomeIcon />
                <ListItemText insert primary ='Etusivu' />
            </MenuItem>
            <MenuItem component={ Link } to='/lisaa' onClick={handleClose}><CreateIcon />
                <ListItemText insert primary ='Lisää' />
            </MenuItem>
            <MenuItem onClick={handleClose}><PersonIcon />
                <ListItemText insert primary ='Kirjaudu sisään' />
            </MenuItem>
        </ Menu>
    </MenuList>

    return (
        <div>
            <AppBar position='static' >
                <Toolbar>
                    <IconButton onClick={ handleMenu } color='default' ><MenuIcon /></IconButton>
                    { menu }
                    <Typography variant='h5' style={ {flexGrow: 1, textAlign: 'center'} }  color='default'>Leffa Arvostelut</Typography>

                </Toolbar>
            </AppBar>


        </div>
    );
}

export default  MenuMUI;