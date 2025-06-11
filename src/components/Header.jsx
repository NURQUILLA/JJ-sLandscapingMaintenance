import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import './Header.css'

export const Header = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
        
        if(currentPosition > 100 && scrollPosition <= currentPosition + 100){
            setVisible(false);
        }else{
            setVisible(true);
        } 
      };

      useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };

      },[scrollPosition])

    return(
<header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
    <Navbar/>
</header>
    )
}

export default Header;