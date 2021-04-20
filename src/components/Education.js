import React from 'react'

const Education = () => {
    return (
        <div id="education" className="container-education" style={{background: "#eee"}}>
            <div className="row">
                <div className="col-full">
                    <h2 className="section-title">Education</h2>
                    <div className="centered line"></div>
                </div>
            </div>

            <div className="section-content">
                <div className="school">
                    <div className="col-full">
                        <h3 className="college-name">University of florida</h3>
                        <div className="school-meta"> Master of Science <span className="bullet">•</span> Computer Science</div>
                    </div>
                    <div className=" col-full text-justify mx-6 my-2 collegeDesc">
                        <p>I learned a lot of advanced concepts in subjects such as advance data structures, distributed operating system, and Human Computer Interaction. I always backed my theoretical knowledge by practically implementing them through coding which I think was the best part of this journey. Learning under Professors like Alin Dobra, Sartaj Sahni, and Alper Ungor was a great experience and having such friendly competitive peers brings out the most in me at all times. Being a part of such diversely rich gotor community, has taugh me a lot about other cultures and it always felt like family here.</p>
                            
                    </div>
                    <p><strong>Graduating in:</strong> May 2021</p>
                </div>

                <div className="separator"></div>
                <div className="school">
                    <div className="col-full">
                        <h3 className="college-name">Rajiv Gandhi Proudyogiki Vishwavidyalaya, India</h3>
                        <div className="school-meta"> Bachelors of Engineering <span className="bullet">•</span> Information Technology</div>
                    </div>
                    <div className="col-full text-justify mx-6 my-2 collegeDesc">
                        <p>I was introduced to the coding world properly through my bachelors. I learnt the fundamentals of Computer Science like OOPS, Algorithms, Networks and many more throughout my 4 years in this institute. I developed lots of academic projects in technologies like Java, Node.js and javascript.  I was able to make my decision for pursuing higher studies by positive motivation from my faculty here. Apart from studies, I was a part of Literature Club, Drama Club and College Chess Team.</p> 
                    </div>
                    <p><strong>Graduated:</strong> 2019</p>

                </div>
            </div>
            
        </div>
    )
}

export default Education
