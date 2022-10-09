import { useEffect, useRef, useState } from 'react';

import Navigation from './navigation';
import Project from './project';

const Portfolio = () => {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <header className="portfolio">
            <div>
                <h1 ref={ref}>PORTFOLIO</h1>
            </div>
        </header>

        <main className="portfolio">
            <div className="portfolio">
                <Project code={0} width={1.5*width}/>
            </div>
        </main>

        <Navigation/>
        </>
    )
}

export default Portfolio;