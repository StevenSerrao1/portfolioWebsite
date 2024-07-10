import React from 'react';
import '../css/Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2>Am I the right fit?</h2>
                    <h3 id="compat">With ever-evolving tech stacks and groundbreaking new tools being released every day, it is important for 
                        developers to remain informed. Here is a list of my dev skills, visually represented, so that YOU can determine whether or not
                        I have the skills you need!<br /><br />
                    </h3>
                    <div className="skill-category">
                        <h4 id="skill-heading">Programming Languages</h4>
                            <div className="skill">
                                <h5>C# (for .NET/Blazor/Unity3D)</h5>
                                <div className="skill-level">
                                    <div className="skill-bar" style={{ width: '85%'}}></div>
                                </div>
                                <p>Tough, but fair. I have always appreciated C# for its simplicity and power, and it is the programming language I am best accustomed to. 
                                    I particularly admire its versatility. When starting out, I thought that the versatility of C# would open up a 
                                    broad range of possibilities, and it has delivered! I love making small-scale indie games with Unity and I immediately loved working with Blazor, the UI framework for ASP.NET. </p>
                            </div>

                            <div className="skill">
                                <h5>JavaScript / JSX (for Web Development)</h5>
                                <div className="skill-level">
                                    <div className="skill-bar" style={{ width: '92%'}}></div>
                                </div>
                                <p>Ol' reliable! This site is designed with a React frontend (utilizing libraries like 'react-router-dom' and 'Bootstrap' for CSS, while using 'JSX' syntax for React Components) and powering the back-end, we have 'Node.js' enabling server-side JS (achieved using libraries like 'Next.js' for SSR and CSR, 'Redux.js' for state management) and finally using 'Express.js' as the back-end/middleware facilitator. JS</p>
                            </div>

                            <div className="skill">
                                <h5>Python (for Web and ML)</h5>
                                <div className="skill-level">
                                    <div className="skill-bar" style={{ width: '75%'}}></div>
                                </div>
                                <p>The Jack of All Trades. I particularly enjoy Python for its diversity and its beautiful simplicity. Python is also extremely handy due to its relationship with Machine Learning, 
                                    a field which I am also highly interested in. I enjoy working with Jupyter Notebook, Data Interaction libs like Numpy and Pandas, 
                                    as well as other Python related tools.</p>
                            </div>
                            
                            <h4 id="skill-heading">Frameworks and Technologies</h4>
                            <div className="skill">
                                <h5>React + Node / Express (for Web Development)</h5>
                                <div className="skill-level">
                                    <div className="skill-bar" style={{ width: '92%'}}></div>
                                </div>
                                <p>Tough, but fair. I have always appreciated C# for its simplicity and power, and it is the programming language I am best accustomed to. 
                                    I particularly admire its versatility. When starting out, I thought that the versatility of C# would open up a 
                                    broad range of possibilities, and it has delivered! I love making small-scale indie games with Unity and I immediately loved working with Blazor, the UI framework for ASP.NET. </p>
                            </div>

                            <div className="skill">
                                <h5>Blazor / Razor Views + ASP.NET Core (for Web Development and Desktop App Development)</h5>
                                <div className="skill-level">
                                    <div className="skill-bar" style={{ width: '85%'}}></div>
                                </div>
                                <p>Tough, but fair. I have always appreciated C# for its simplicity and power, and it is the programming language I am best accustomed to. 
                                    I particularly admire its versatility. When starting out, I thought that the versatility of C# would open up a 
                                    broad range of possibilities, and it has delivered! I love making small-scale indie games with Unity and I immediately loved working with Blazor, the UI framework for ASP.NET. </p>
                            </div>

                    </div>
            </div>
        </section>
    );
}

export default Skills;