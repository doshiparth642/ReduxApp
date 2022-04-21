import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";


const Header = () => {
    return (

        <div className="menu_style">
            <NavLink to='/' >
            <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>ProductList</Button>
            </NavLink>

            <NavLink to='/search' >
            <Button style={{ margin: '10px', padding: '10px', color: 'black' }}>Search</Button>


            </NavLink>

        </div>




    );
};

export default Header;

{/*<div className="ui fixed menu">
            <div className="ui container center">
                
             <h2>fake App</h2>
    </div>

      
    </div>*/}