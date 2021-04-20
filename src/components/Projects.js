import React from "react";
import p2pimg from "../projectImages/p2pbt.png";
import twitterimg from "../projectImages/twitter.PNG";
import hearitimg from "../projectImages/hearit.PNG";
import pastryimg from "../projectImages/pastry.png";
import wayneimg from "../projectImages/wayne.png";
import gossipimg from "../projectImages/gossip.PNG";

const Projects = () => {
    return (
        <div id="projects" className="container-projects py-4">
            <div className="row">
                <div class="col-full">
                    <h2 class="project-title">Projects</h2>
                    <div class="centered line"></div>
                </div>
            </div>


            <div className="proj-name-container mt-5 mb-1" > 
                    <p className="project-name">Peer-To-Peer File Sharing Application: BitTorrent</p>
                </div>

            <div className="row mb-5">
                
                <div className="col-xm-12 col-lg-6">
                    
                    <div className="proj-desc-container">
                        <p className=" project-para ">
                            <strong>  Tenure: 1.5 Months</strong> <br></br>
                            <strong>  Technology Used: Java, Socket-programming, Git </strong> <br></br>
                            Developed file distribution application for peer-to-peer architecture using
                            multi-threading and socket programming in Java which follows BitTorrent like protocols.
                            Implemented choke-unchoke mechanism to prioritize peerselection for improved transmission
                            efficiency. Peer selection for unchoking is based on their downloading speed in the previous quantum (time slot), higher downloading speed will be prioritized more. I learned a lot about requirement gathering and class design in this project. </p>
                    </div>
                </div>

                <div className="col-xm-12 col-lg-6">
                    <div className="project-wrap">
                        <img className="project-img" src={p2pimg} alt="My image" />                        
                    </div>
                </div>

            </div>            

            {/* proj2  */}

            <div className="proj-name-container mt-2 mb-1" > 
                    <p className="project-name">Twitter Clone Simulator</p>
                </div>

            <div className="row mb-5">
                
                <div className="col-xm-12 col-lg-6">
                    
                    <div className="proj-desc-container">
                        <p className=" project-para ">
                            <strong>  Tenure: 1 Months</strong> <br></br>
                            <strong>  Technology Used:F#, Suave, AKKA Framework, REST, Socket-programming, Git, Javascript, HTML, CSS  </strong> <br></br>
                            Implemented a Twitter Clone and a client simulator. As of now, Twitter does not seem to support a WebSocket API. So, I build an engine that is paired up with Web Sockets to provide various functionalities like register account, send tweet, register tweets having hashtags and mentions, subscribe to other user's tweets, re-tweets, allow querying tweets subscribed to, tweets with specific hashtags, and tweets in which the user is mentioned. If the user is connected, deliver the new tweets live (without page refresh). Designed JSON based API that represent all messages and their replies while communicating through web sockets. Simulated thousands of user and used zipf distribution for allocating initial followers to a user. Simulated close to 27 million message transmission in the distributed system taking 0.01 millisecond per message transmission.<br />
                            <a href="https://github.com/tanmayporwal/TwitterCloneSimulator" target="_blank">Twitter Clone Simulator Code</a> <br />
                            <a href="https://youtu.be/we7TgWJbvtA" target="_blank">Video Demonstration</a>
                        </p>
                    </div>
                </div>

                <div className="col-xm-12 col-lg-6">
                    <div className="project-wrap">
                        <img className="project-img" src={twitterimg} alt="My image" />                        
                    </div>
                </div>

            </div>            

            {/* proj3 */}

            <div className="proj-name-container mt-2 mb-1" > 
                    <p className="project-name">Assistive Tool For Hearing: Hear It</p>
                </div>

            <div className="row mb-5">
                
                <div className="col-xm-12 col-lg-6">
                    
                    <div className="proj-desc-container">
                        <p className=" project-para ">
                            <strong>  Tenure: 2 Months</strong> <br></br>
                            <strong>  Technology Used: Android, Java, Google Voice API </strong> <br></br>
                            Created a tool to aid hearing impaired people to get alerted when their name is called. This is done through use of sound and keyword recognition through a mobile application. When the keyword which is usually the name of the hearing-impaired person is called, the mobile application will produce vibrations and display that someone is calling them. Added support for smartwatch which also produces vibrations to alert the person and then displays someone is calling them. Application provides the following features, first to alert the user on the keyword detection, second to change the keyword as per the user’s requirement, third to give a real time transcription of the conversation on the application screen. This application may help the deaf and hearing-impaired people to feel secure and helps them fit better in social events. <br />
                            <a href="https://github.com/shashankcm95/Hear-It" target="_blank">Hear It Code</a>

                            
                        </p>
                    </div>
                </div>

                <div className="col-xm-12 col-lg-6">
                    <div className="project-wrap">
                        <img className="project-img" src={hearitimg} alt="My image" />                        
                    </div>
                </div>

            </div>            

            {/* proj4 */}

            <div className="proj-name-container mt-2 mb-1" > 
                    <p className="project-name">Pastry Network</p>
                </div>

            <div className="row mb-5">
                
                <div className="col-xm-12 col-lg-6">
                    
                    <div className="proj-desc-container">
                        <p className=" project-para ">
                            <strong>  Tenure: 2 Weeks</strong> <br></br>
                            <strong>  Technology Used: F#, AKKA Framework, Git </strong> <br></br>
                            Implemented pastry network which is a scalable,
                            distributed object location and routing substrate for wide-area peer-to-peer applications.
                            Pastry is completely decentralized, scalable, and self-organizing; it automatically
                            adapts to the arrival, departure and failure of nodes. Created emulated network of up to 100,000 nodes
                            confirm Pastry’s scalability and efficiency, its ability to self-organize and adapt to
                            node failures, and its good network locality properties.
                            Each node in the Pastry network has a unique identifier (nodeId). When presented
                            with a message and a key, a Pastry node efficiently routes the message to the
                            node with a nodeId that is numerically closest to the key, among all currently
                            live Pastry nodes. Each Pastry node keeps track of its immediate neighbors in
                            the nodeId space, and notifies applications of new node arrivals, node failures
                            and recoveries. Pastry takes into account network locality; it seeks to minimize
                            the distance messages travel, according to a to scalar proximity metric like the
                            number of IP routing hops. <br />
                            <a href="https://github.com/tanmayporwal/PastryNetwork" target="_blank">Pastry Network Code</a>
                        </p>
                    </div>
                </div>

                <div className="col-xm-12 col-lg-6">
                    <div className="project-wrap">
                        <img className="project-img" src={pastryimg} alt="My image" />                        
                    </div>
                </div>

            </div>            
            {/* proj 5 */}
            <div className="proj-name-container mt-2 mb-1" > 
                    <p className="project-name">Wayne Enterprise: Construction Management</p>
                </div>

            <div className="row mb-5">
                
                <div className="col-xm-12 col-lg-6">
                    
                    <div className="proj-desc-container">
                        <p className=" project-para ">
                            <strong>  Tenure: 1.5 Weeks</strong> <br></br>
                            <strong>  Technology Used: Java</strong> <br></br>
                            Implemented a simplified simulation of Linux’s scheduling algorithm (Completely Fair Scheduler). Developed a software for construction companies using data structures such as Min Heap and Red Black Tree, which keeps the track of all buildings under construction for the new city. The building record has following properties: building number, executed time (time invested on a building), and total time required for a building to complete. This will work on one building at a time and selection of a building is based on the lowest executed time or building Id if the two buildings have similar executed time. The selected building is worked on until completed or for n days, whichever happens first. If the building completes during this period, its number and day of completion is output, and it is removed from the list of construction.<br />
                            <a href="https://github.com/tanmayporwal/Wayne-Enterprise" target="_blank">Wayne Enterprise: Construction Management Code</a>
                        </p>
                    </div>
                </div>

                <div className="col-xm-12 col-lg-6">
                    <div className="project-wrap">
                        <img className="project-img" src={wayneimg} alt="My image" />                        
                    </div>
                </div>

            </div>            

            {/* proj6 */}

            <div className="proj-name-container mt-2 mb-1" > 
                    <p className="project-name">Gossip Simulator</p>
                </div>

            <div className="row mb-5">
                
                <div className="col-xm-12 col-lg-6">
                    
                    <div className="proj-desc-container">
                        <p className=" project-para ">
                            <strong>  Tenure: 2 Weeks</strong> <br></br>
                            <strong>  Technology Used: F#, AKKA Framework, Git </strong> <br></br>
                            Implemented gossip type algorithms which can be used for both group communication and for aggregate computation.  Determined convergence of such algorithms through a simulator based on actors written in F#.  The type of gossip implemented is called asynchronous gossip since threads in F# are asynchronous. Gossip algorithm is used for information propagation, working like an epidemic spread. A participant is told/sent a rumor by the main process. Each participant selects a random neighbor and tells it the rumor. Each participant keeps track of rumors and how many times it has heard the rumor.  It stops transmitting once it has heard the rumor k (can be set accordingly) times. The actual network topology plays a critical role in the dissemination speed of Gossip protocols. Various topologies created are: <br />
                                a.	Full Network: All nodes are neighbor of each other.<br />
                                b.	2D Grid: Nodes form a grid and are connected to adjacent 4 neighboring nodes.<br />
                                c.	Line: Nodes form a line, and each node has strictly two neighbors (except first and last node).<br />
                                d.	Imperfect 2D Grid: Same as 2D grid and also has an additional random neighbor from the network.<br />
                            <a href="https://github.com/tanmayporwal/Gossip_Protocols" target="_blank">Gossip Simulator Code</a>

                        </p>
                    </div>
                </div>

                <div className="col-xm-12 col-lg-6">
                    <div className="project-wrap">
                        <img className="project-img mt-3" src={gossipimg} alt="My image" />                        
                    </div>
                </div>

            </div>            

            {/* project Template */}

            {/* <div className="proj-name-container mt-2 mb-1" > 
                <p className="project-name">Project Name</p>
            </div>

            <div className="row mb-5">
                
                <div className="col-xm-12 col-lg-6">
                    
                    <div className="proj-desc-container">
                        <p className=" project-para ">
                            <strong>  Tenure: </strong> <br></br>
                            <strong>  Technology Used:  </strong> <br></br>
                            Description <br />
                            <a href="" target="_blank">Code</a>
                        </p>
                    </div>
                </div>

                <div className="col-xm-12 col-lg-6">
                    <div className="project-wrap">
                        <img className="project-img" src={Image} alt="My image" />                        
                    </div>
                </div>

            </div>             */}
        </div>
    )
}

export default Projects
