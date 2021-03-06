import React from 'react';

// Materail UI Components
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

import { useHistory } from 'react-router-dom';


const navegar = (url) => {
    console.log(`Navegamos a ${url}`);
}

// Lista de navegación a vistas de la aplicación
export const mainListItems = (

    <div>
        {/* Opción para navegar a la home */}
        <ListItem button onClick={ () => navegar('/home') }>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
        </ListItem>
        {/* Opción para navegar a Pedidos */}
        <ListItem button onClick={  () => navegar('/pedidos') }>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary='Pedidos' />
        </ListItem>
        {/* Opción para navegar a Usuarios */}
        <ListItem button onClick={  () => navegar('/usuarios') }>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Usarios' />
        </ListItem>
        {/* Opción para navegar a Usuarios */}
        <ListItem button onClick={ () => navegar('/informes')  }>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Informes' />
        </ListItem>
    </div>


);


// Lista de navegación a vistas de Settings
export const settingsListItems = (
    <div>
        {/* Opción para navegar a la home */}
        <ListItem button onClick={ navegar }>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
        </ListItem>
    </div>
);