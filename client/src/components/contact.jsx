import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import Navigation from './navigation';

const Contact = () => {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
        window.scrollTo(0, 0);
    }, []);

    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validate = () => {
        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) setError('Incorrect email');
        else if(topic.length < 5) setError('Topic must be at least 5 characters long');
        else if (topic.length > 80) setError('Topic must have less than 80 characters');
        else if(message.length < 5) setError('Message must be at least 5 characters long');
        else if(message.length > 1500) setError('Message must be less than 1500 characters long');
        else return true;

        return false;
    }

    const submit = async (e) => {
        e.preventDefault();

        if(!validate()) return;
        setError('');

        const messageObject = {
            email, topic, message
        };

        try {
            const uriPrefix = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000' : '';
            const { data } = await axios.post(uriPrefix + '/api/add-message', messageObject);
            setSuccess(data);
        }   
        catch(e) {
            setError(e.response.data.message || 'Server error. Sorry :(');
        }
    }

    return (
        <>
        <header className="contact">
            <div>
                <h1 ref={ref}>CONTACT</h1>
            </div>
        </header>

        <main className="contact">
            
            <div style={{width: 1.5*width}}>
                { success && <p className="success">{success}</p>}

                { !success && (
                <form id="contact-form" onSubmit={e => submit(e)} className={`${success ? 'hide' : ''}`}>
                    <h2>Contact Me</h2>

                    {error && <p className="form-error">{error}</p> }

                    <fieldset>
                        <label htmlFor="email">your email</label>
                        <input type="text" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="topic">topic</label>
                        <input type="text" placeholder="job offer! :)" value={topic} onChange={e => setTopic(e.target.value)}/>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="message">message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)}/>
                    </fieldset>

                    <button type="submit">Send</button>
                </form>
                )}
            </div>
            
            <div id="additional">
                <div>
                    <h2>Or if you prefer</h2>
                    <p>email</p>
                    <a href="mailto:contact@jakubszuminski.com">contact@jakubszuminski.com</a>
                    <object id="contact-blob" data="visuals/blob.svg"/>
                </div>
            </div>
        </main>

        <Navigation/>
        </>
    )
}

export default Contact;