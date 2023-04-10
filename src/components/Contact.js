import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () =>{
    return(
        <div>
            <NavLink to="/card/danov">
                <div 
                className="ui raised very padded text container segment"
                style = {{marginTop:'80px'}}
                >
                    <h3 className="ui header">Danov</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </NavLink>
            <NavLink to="/card/uud">
                <div 
                className="ui raised very padded text container segment"
                style = {{marginTop:'80px'}}
                >
                    <h3 className="ui header">Uud</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </NavLink>
            <NavLink to="/card/mbuh">
                <div 
                className="ui raised very padded text container segment"
                style = {{marginTop:'80px'}}
                >
                    <h3 className="ui header">Mbuh</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </NavLink>
        </div>
    )
}

export default Contact;