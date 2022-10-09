import { useEffect, useState } from "react";
import projects from "../data/projects";

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Project = (props) => {
    const [code, setCode] = useState(props.code);
    const [project, setProject] = useState({});
    const [description, setDescription] = useState([]);
    const [moreDescription, setMoreDescription] = useState([]);

    const [showFull, setShowFull] = useState(false);
    const [showed, setShowed] = useState(false);

    useEffect(() => {
        setProject(projects[code]);
        setShowFull(false);
        setShowed(false);
    }, [code]);

    useEffect(() => {
        setDescription(project?.description?.split("+n"));
        setMoreDescription(project?.more?.split("+n"));
    }, [project]);

    useEffect(() => {
        //fix this code -> this is unclean
        const container = document.querySelector('main.portfolio');
        if(showFull) {
            container.classList.remove('hidden');
            container.classList.add('show');
            setShowed(true);
        } else if(showed) {
            container.classList.add('hidden');
            container.classList.remove('show');
        } else {
            container.classList.remove('show');
        }
    }, [showFull, showed]);

    //todo: fix animations
    return (
        <TransitionGroup>
        <CSSTransition
            key={code}
            timeout={500}
            classNames="project-change"
        >
        <article className="project" style={{ width: props.width }}>
            <header id="project-header">
                <h1>{project.title}</h1>
                <div className="project-links">
                    <a href={project.link} target="_blank">
                        website
                    </a>
                    <a href={project.github} target="_blank">
                        github
                    </a>
                </div>
            </header>
            <main>
                <div className="project-description">
                    {description?.map((desc, ind) => (
                        <p key={ind}>{desc}</p>
                    ))}

                    <div id="project-more">
                    {moreDescription?.map((desc, ind) => {
                        const el = desc.trim(' ');

                        if(el.startsWith('#h2')) return <h2 key={ind}>{el.slice(3)}</h2>
                        else if(el.startsWith('#h3')) return <h3 key={ind}>{el.slice(3)}</h3>
                        else if(el.startsWith('#h4')) return <h4 key={ind}>{el.slice(3)}</h4>
                        else if(el.endsWith('+s')) return <p key={ind} className='small-margin'>{el.slice(0, -2)}</p>
                        return <p key={ind}>{el}</p>
                        })}
                    </div>
                </div>

                <div className="project-buttons">
                    
                    <button className="cta" onClick={() => setShowFull(!showFull)}>
                        {showFull ? 'Close' : 'Read more'}
                    </button>
                    
                    {!showFull && (
                        <>
                        {code > 0 && (
                            <button onClick={() => setCode(code - 1)}>
                                Prev
                            </button>
                        )}
                        {code < projects.length - 1 && (
                            <button onClick={() => setCode(code + 1)}>
                                Next
                            </button>
                        )}
                        </>
                    )}
                </div>
            </main>
        </article>
        </CSSTransition>
        </TransitionGroup>
    );
};

export default Project;
