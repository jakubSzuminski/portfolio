import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const path = window.location.pathname;

    //for mobile menu
    const [opened, setOpened] = useState(false);
    const [onceOpened, setOnceOpened] = useState(false);

    useEffect(() => {
        if(opened) setOnceOpened(true);
    }, [opened]);

    return (
        <nav className={`${opened && 'mobile-active' || ''}${(onceOpened && !opened) && 'mobile-inactive' || ''}`}>
            <div id="mobile">
                <button onClick={() => setOpened(!opened)}>{opened ? 'closeNavigation()' : 'openNavigation()'}</button>
            </div>

            <ul>
                <li> <Link to="/portfolio" className={`${path === '/portfolio' && 'active'}`}>Portfolio</Link> </li>
                <li> <Link to="/skills" className={`${path === '/skills' && 'active'}`}>Skills</Link> </li>
                <li> <a href="https://github.com/jakubSzuminski" target="_blank">My GitHub</a> </li>
                <li> <Link to="/blog" className={`${path === '/blog' && 'active'}`}>My blog</Link> </li>
                <li> <Link to="/contact" className={`${path === '/contact' && 'active'}`}>Contact me</Link> </li>
            </ul>
        </nav>
    )
}

export default Navigation;