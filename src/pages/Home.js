import React from 'react'
import Photo from '../assets/20201115_112239.jpg'
import './Home.css'
function Home() {
  return (
    <div className=" d-flex container">
      <img src={Photo} alt=" Jasur Amirov" />
      <div id="text" className="text-center text-white " >
        <h2 className="text-center" >
          My name is Jasur. <br /> <h3>I am a Full-Stack Web Developer.</h3>
        </h2>
        <p  >
          I have 5 years of experience in an IT Department Weather Forecasting
          Service (WFS). I worked as an IT Technician and then IT Supervisor in
          WFS in Uzbekistan, Kashkadarya. In March 2015 I came to the United
          States and started a new career path.
        </p>
        <p className="text-white" >
          I am a Full-Stack Web Developer with a background in the
          Multi-Family Property Management field. Currently, I am taking
          full-stack web development course in the University of Washington
          Coding Bootcamp, with newly developed skills in JavaScript, CSS,
          JQuery, HTML, ExpressJS, SQL, Mongo Database, and many other Node npm
          packages. Most recently I worked on a team of four to develop a
          website that utilized different APIs, MYSQL database, and AWS S3
          bucket. We collaborated with the team on GitHub to build different
          branches of the project on our local machine and merged them into the
          main branch. I was able to apply my problem solving, organization, and
          strong written/oral communication skills which helped ensure the team
          stayed on track to meet deadlines. I’m excited to put my skills to
          work as part of a fast-paced and quality-driven team.
        </p>
        <p>
          In my portfolio page you can see all my homework projects I have done
          so far. Click on the picture to go to deployed GitHub pages.
        </p>
      </div>
    </div>
  )
}

export default Home
