import React, { Component } from "react";
import { Card } from "react-bootstrap";
import logo2 from "./logo2.jpg";

const cardStyle = {
   
    transitionDuration: "0.3s",
    height: "5vw",
    width: "80vw"
    
  };

const Aboutus =()=>{
    return (
        

        <div>
        <Card style={cardStyle}>
        <center><h1>Bookstore Inventory System</h1></center>
        </Card>
        <div>
             <img  src={logo2} width="1100" height="400" />
        </div>

        <p style={{color: "white"} }>Bookstore is the place where the people will be able to get the books of their choice at reasonable price. There can be various kinds of books available at the book store. 
        But if it is the giant bookstore then the management of it will be very difficult. So the bookstore inventory system application will help in maintaining all these details at one stretch. The bookstore inventory system will help in maintaining the details of the books available,
        employee details and many other details.</p>
        
        </div>
     
    )
}
export default Aboutus;