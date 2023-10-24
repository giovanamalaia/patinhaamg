import React from 'react';
import IconPerson from './IconPerson';
import './styles.css'; 

function Header() {
    return (
        <div className="headerContainer">
            <div className="leftSection">
                <img className="logo" width={100} src="../images/logoP.png" alt="Logo" />
                <div className="title">Patinha Amiga</div>
            </div>
            <div className="rightSection">
                <div className="navSection">
                    <div className="navItem">ONGs</div>
                    <div className="navItem">Eventos</div>
                    <div className="navItem">Anuncie</div>
                </div>
                <div className="menuIconContainer">
                    <div>
                        <IconPerson/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
