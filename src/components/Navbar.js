import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Hidden,
    IconButton,
    Toolbar
} from '@material-ui/core';
import { Menu as MenuIcon, Person as PersonIcon } from '@material-ui/icons';

import logoImg from '../assets/images/true-logo.png';

const Navbar = ({ onOpenSideDrawer, ...rest }) => {

    return (
        <AppBar
            elevation={0}
            {...rest}
        >
            <Toolbar>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        onClick={onOpenSideDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <RouterLink to="/">
                    <img src={logoImg} alt="logoImg" height="50px" />
                </RouterLink>
                <IconButton
                    color="inherit"
                >
                    <PersonIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};


export default Navbar;
