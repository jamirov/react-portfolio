import React, {useState} from "react";
import Projects from "../components/Projects";
import neighborChef from "../assets/neighborchef.png"
import employeeDirectory from "../assets/eedir.png"
import budget from "../assets/budget.png"
import fitness from "../assets/fitness.png"
import techblog from "../assets/techblog.png"
import minGal from "../assets/minigal.png"
import "./portfolio.css"


function Portfolio() {

  const [ projects, setProjects] = useState([{
    name:"Your Neigbor Chef",
    description:"This full stack app allows you find chefs in your neighborhood who can cook for you",
    imgSrc: neighborChef,
    alt:"",
    githubLink:"https://github.com/jamirov/Your-Neighbor-Chef",
    deployedLink:"https://boiling-mesa-93312.herokuapp.com/"
  },
  {
    name:"Employee Directory",
    description:"This react app creates employees list created from Random User Api and renders it single page ",
    imgSrc: employeeDirectory,
    alt:"",
    githubLink:"https://github.com/jamirov/Employee-directory",
    deployedLink:"https://jamirov.github.io/Employee-directory/"
  },
  {
    name:"Budget-Tracker",
    description: "The user will be able to add expenses and deposits to their budget with or without a connection.",
    imgSrc:budget,
    alt:"",
    githubLink:"https://github.com/jamirov/Budget-Tracker",
    deployedLink:"https://budgetlartrack.herokuapp.com/"
  },
  {
    name:"Fitness Tracker",
    description: "With this fitness tracker the user can create custom workout plans and track them!",
    imgSrc:fitness,
    alt:"",
    githubLink:"https://github.com/jamirov/Workout-Tracker",
    deployedLink:"https://worklarout.herokuapp.com/?id=6084e5601cf3cd00150de41e"
  },
  {
    name:"Tech Blog",
    description:"The Tech_Blog is a simple blogging site where users can read and comment on other's posts as well as add or delete posts of their own",
    imgSrc: techblog,
    alt:"",
    githubLink:"https://github.com/jamirov/Tech-Blog",
    deployedLink:"https://techlarblog.herokuapp.com/"

  },
  {
    name:"My mini gallery",
    description:"This full stack app allows you share your art with other artists in order to know their opinion",
    imgSrc: minGal,
    alt:"",
    githubLink:"https://github.com/Amal31497/My-Mini-Gallery",
    deployedLink:"#"

  }
])



  return (
    <div>
      <h1>Portfolio</h1>
      <p>
      These are my projects I have done ..
      </p>
      <div id="card" className="d-flex flex-wrap" >
      {projects.map(item=>{
       return <Projects
       name={item.name}
       description={item.description}
       imgSrc={item.imgSrc}
       githubLink={item.githubLink}
       deployedLink={item.deployedLink}
       
       />
      }) }
      </div>
    
    </div>
  );
}

export default Portfolio;
