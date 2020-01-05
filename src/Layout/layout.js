import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core/';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import {
  Input as InputIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons';

import ComponentList from './componentList';
import styles from './layout.style';

function Layout(props) {
  const classes = styles();
  const theme = useTheme();
  const [loginData] = useState(JSON.parse(localStorage.getItem('user')));
  const [open, setOpen] = React.useState(false);
  const [routeLink, setRouteLink] = useState('');

  const ForwardNavLink = React.forwardRef((props, ref) => (
    <NavLink {...props} innerRef={ref} />
  ));


  const Role = loginData;
  const role = 'admin' || Role;

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const handleMenu = () => {
    localStorage.clear();
    window.location = '/';
   
  }

  const sideBarList = ComponentList;

  const roleList = () => {
    if (role) {
      const roleLower = role.toLowerCase();
      return sideBarList[roleLower]
    }
  }

  function onListClick(route) {
    setRouteLink(roleList().filter(item => item.link === route)[0]);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Apple
          </Typography>
          <div
            style={{ marginLeft: 'auto' }}
          >
            <IconButton
              onClick={handleMenu}
              color="inherit"
            >
              <InputIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {roleList() && roleList().length && roleList().map((index, item) => (
            <BrowserRouter key={index.name}>
              <ListItem
                button
                key={index}
                component={ForwardNavLink}
                to={index.link}
                onClick={() => onListClick(index.link)}
              >
                <ListItemIcon>{index.icon}</ListItemIcon>
                <ListItemText primary={index.name} />
              </ListItem>
            </BrowserRouter>
          ))}
          <Divider />
        </List>
       
      </Drawer>
      <main
        className={classes.content}
      >
        <div className={classes.toolbar} />
        {
          routeLink ? <routeLink.component /> :
            (
              <BrowserRouter>
                <Switch>
                  {roleList() && roleList().length && roleList().map((index,item) => (
                    <Route key={index.name} path={index.link} exact component={index.component} />
                  ))}
                </Switch>
              </BrowserRouter>
            )
        }
      </main>
    </div>
  );
}

Layout.propTypes = {
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default withStyles(styles)(Layout);
