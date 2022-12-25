import React from "react";
import {Outlet} from 'react-router-dom'
function Layout (){
    return(
        <div>
            <p>header</p>
        <Outlet/>
        </div>
    )
}

export default Layout;