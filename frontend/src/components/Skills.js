import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <div class="container">
                <h2>Am I the right fit?</h2>
                    <h3 id="compat">With ever-evolving tech stacks and groundbreaking new tools being released every day, it is important for 
                        developers to remain informed. Here is a list of my dev skills, visually represented, so that YOU can determine whether or not
                        I have the skills you need!<br /><br />
                    </h3>
                    <div class="skill-category">
                        <h4 id="skill-heading">Programming Languages</h4>
                            <div class="skill">
                                <h5>C# (for .NET/Blazor/Unity3D)</h5>
                                <div class="skill-level">
                                    <div class="skill-bar" style={{ width: '90%'}}></div>
                                </div>
                                <p>Tough, but fair. I have always appreciated C# for its simplicity and power, and it is the programming language I am best accustomed to. 
                                    I particularly admire its versatility. When starting out, I thought that the versatility of C# would open up a 
                                    broad range of possibilities, and it has delivered! I love making small-scale indie games with Unity and I immediately loved working with Blazor, the UI framework for ASP.NET. </p>
                            </div>

                            <div class="skill">
                                <h5>Python (for Web and ML)</h5>
                                <div class="skill-level">
                                    <div class="skill-bar" style={{ width: '90%'}}></div>
                                </div>
                                <p>I particularly enjoy Python for its diversity and its beautiful simplicity. Python is also extremely handy due to its relationship with Machine Learning, 
                                    a field which I am also highly interested in. I enjoy working with Jupyter Notebook, Data Interaction libs like Numpy and Pandas, 
                                    as well as other Python related tools.</p>
                            </div>
                    </div>
            </div>
        </section>
    );
}

export default Skills;