import { NavLink } from "react-router-dom";
import React, { Component } from "react";

class Nav extends Component {
    render() { 
        return (
            <div>
                <NavLink to="/Create"><li>Create Tickets</li></NavLink>
                <NavLink to="/Tickets"><li>Tickets</li></NavLink>
            </div>
        );
    }
}
 
export default Nav ;