import { useEffect } from 'react';
import Navigation from './navigation';

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <header className="skills">
            <div>
                <h1>SKILLS</h1>
            </div>
        </header>

        <main className="skills">
            <div className="skills-container">
                <div className="skills-category">
                    <h2>Frontend</h2>
                    
                    <div className="skills-group">
                        <h3>javascript</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                        </ul>
                    </div>

                    <div className="skills-group">
                        <h3>styling</h3>
                        <ul>
                            <li>CSS</li>
                            <li>SAAS</li>
                            <li>Bootstrap</li>
                            <li>Figma</li>
                        </ul>
                    </div>

                    <div className="skills-group">
                        <h3>other</h3>
                        <ul>
                            <li>HTML</li>
                            <li>Axios</li>
                            <li>Rest API</li>
                        </ul>
                    </div>
                </div>

                <div className="skills-category skills-category-left">
                    <h2>Backend</h2>
                    
                    <div className="skills-group">
                        <h3>frameworks</h3>
                        <ul>
                            <li>Express (Node.js)</li>
                        </ul>
                    </div>

                    <div className="skills-group">
                        <h3>packages</h3>
                        <ul>
                            <li>mongoose</li>
                            <li>passport</li>
                            <li>jwt</li>
                        </ul>
                    </div>

                    <div className="skills-group">
                        <h3>other</h3>
                        <ul>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className="skills-category skills-category-small">
                    <h2>Familiar with</h2>
                    
                    <div className="skills-group">
                        <h3>languages</h3>
                        <ul>
                            <li>Typescript</li>
                            <li>Python</li>
                            <li>C++</li>
                        </ul>
                    </div>

                    <div className="skills-group">
                        <h3>other</h3>
                        <ul>
                            <li>Git</li>
                            <li>Django</li>
                            <li>SEO</li>
                            <li>UI/UX</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

        <Navigation/>
        </>
    )
}

export default Skills;