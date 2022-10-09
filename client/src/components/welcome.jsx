import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from './loading';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Welcome = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Welcome loading state: ', loading);
    }, [loading]);

    return (
        <TransitionGroup>
            <CSSTransition
                key={loading}
                timeout={500}
                classNames="fade"
            >
                {loading ? <Loading setLoading={setLoading}/> : (
                
                <div>

                    <header className="welcome">
                        <div>
                            <h2>Jakub Szuminski's</h2>
                            <h1>PORTFOLIO</h1>
                        </div>
                    </header>

                    <main className="welcome">
                        <div>
                            <object id="blob-2" className="blob" data="visuals/secondblob.svg"/>
                            <object id="blob-1" className="blob" data="visuals/blob.svg"/>
                            <button className="blob-button" onClick={() => navigate('/portfolio')}>See my work</button>
                        </div>
                    </main>
            
                </div>
                )}
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Welcome;