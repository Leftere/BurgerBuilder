import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
const Layout = (props) => (
    <Aux>
        <div>Toolbar. SideDrawer, Backdrop</div>
    <main className="Content">
        {props.children}
    </main>    
    </Aux>
      
);
    

export default Layout;