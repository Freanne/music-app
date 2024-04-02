import {useState} from 'react'
import { Link } from "react-router-dom";
import './styles/Header.scss'
import CloseIcon from '@mui/icons-material/Close';
import MenuBookIcon from '@mui/icons-material/MenuBook';



const Header = () => {

     const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }

    return (

        <div className="header">
            <div className="header__logo">
                <h1>Simplilearn</h1>
             </div>
             <nav className="navbar">
                <div className="closed"
                >
                    <CloseIcon className="close" onClick={showMenu} />
                </div>

                <li >
                    <Link to="/" className="link" ><b>Home</b>  </Link >
                    
                </li>
                <li>
                    <Link to="/"> <b>About</b>  </Link >
                </li>
                <li>
                    <Link to="/"> <b>Portfolio</b>  </Link >
                </li>
                <li>
                    <Link to="/"> <b>Blog</b>  </Link >
                </li>
                <li>
                    <Link to="/"> <b>Contact</b> </Link >
                </li>
             </nav>

             <div className="changer"> 
                    <MenuBookIcon className="menu" onClick={showMenu}/>
             </div>

        </div>
        )
    }

export default Header