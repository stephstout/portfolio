import React from 'react';

const ProjectGallery = () => {
    return (
        <div className="project-gallery">
           <h2>things i've made:</h2>
           {/* <img src="/Users/stephaniestout/projects/portfolio/public/images/imageboard.png" alt=" image board project" />
           <img src="public/images/lifeonmars.png" alt="life on mars" />
           <img src="/Users/stephaniestout/projects/portfolio/public/images/blog.png" alt="blog" /> */}
           <h3><a href="https://steph-codes-fe.herokuapp.com/"><span>my blog</span></a>: a full-stack application using React and Django with a focus on UI and authentication.</h3>
           <h3><a href="https://hatcrew.herokuapp.com/signup"><span>image board</span></a>: a team constructed MERN app focusing on version control and authentication</h3>
           <h3><a href="https://ss-life-on-mars.herokuapp.com/"><span>life on mars</span></a>: A React app using two API's.</h3>
           <h3><a href="https://stephstout.github.io/dino-flash-cards/"><span>dinosaur flash cards</span></a>: my first javascript project.</h3>
        </div>
    );
};

export default ProjectGallery;