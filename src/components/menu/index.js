import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="DevFlix logo" />
            </Link>

            {/* <ButtonLink className="ButtonLink" href="/">
                Novo video
            </ButtonLink> */}

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video SC
            </Button>
        </nav>
    );
}

export default Menu;