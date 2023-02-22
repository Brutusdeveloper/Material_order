import React from "react";
import './Header.css';
import Avatar from 'react-avatar';

const Header = () => {
    return (
        <div className="Header_wrapper d-flex justify-content-between">
            <div className=" d-flex align-items-center">
                <img src='./stock-dealing.png' />
                <span className="Header_title">Grab Fresh</span>
            </div>
            <div className=" d-flex align-items-center text-center">
            <Avatar className="me-2" name="Wim Mostmans" size="40" round={true} />
                <div className="d-block" style={{height:"14px"}}>
                <div className="Header_Profile">Vijayakumar</div>
                <span className="text-center Header_Profile">Admin</span>
                </div>
                
            </div>
        </div>
    )
}
export default Header;