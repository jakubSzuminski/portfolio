import { useEffect, useState } from 'react';

const Loading = ({ setLoading }) => {    
    const [time, setTime] = useState(2);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000);

        if(time <= 0) setLoading(false);
    }, [time]);

    useEffect(() => { 
        if(counter === 3) setTimeout(() => setCounter(1), 800);
        else setTimeout(() => setCounter(counter + 1), 400);
    }, [counter]);

    return (
        <div className="loading-container">
            <h1>I'm glad you are here!</h1>
            <p>Loading{counter === 1 ? '.' : counter === 2 ? '..' : '...'}</p>
        </div>
    )
}

export default Loading;