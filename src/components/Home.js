import React from "react";

const Home = (props) =>{
    console.log(props);
    return(
        <div 
        className="ui raised very padded text container segment"
        style = {{marginTop:'80px'}}
        >
        <h3 className="ui header">Home</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    )
}

export default Home;