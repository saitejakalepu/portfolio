import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import firebaseData from '../../firebase';
import { MockData } from "./MockData";


function Projects() {

  const [ projectData , setProjectdata] = useState([]);
  
   useEffect(()=>{
    firebaseData.database().ref("projects").on("value",snapshot=>{
      let projectlist=[];
      snapshot.forEach(snap=>{
          projectlist.push(snap.val());
      });
      if(projectlist.length === 0)
      {
        setProjectdata(MockData.projects);
      }
      else 
      {
        setProjectdata(projectlist);
      }
    });
   },[])

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
         { projectData.map( data =>{
          return(
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data.imgPath}
              isBlog={data.isBlog}
              title={data.title}
              description={data.description}
              ghLink={data.ghLink}
              demoLink={data.demoLink}
            />
          </Col>
          )
         })}
        {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Realtime Expense Tracker"
              description="Real time expense tracker built with React JS and Redux which notes the user expenses and store them in local storage. User can Edit or Delete or Filter the expenses."
              ghLink="https://github.com/saitejakalepu/Realtime-Expense-Tracker-Redux"
              demoLink="https://saitejakalepu.github.io/Realtime-Expense-Tracker-Redux/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelWebsite}
              isBlog={false}
              title="Travel Buddy"
              description="Travel booking application is a multi-page web application built with React JS, Firebase, Bootstrap and Email JS. Have features which allows users to log in or Sign up in real time using email/gmail/phone number and book holiday packages with credit card. Additionally user can subscribe to newsletter or provide feedback regarding the services."
              ghLink="https://github.com/saitejakalepu/TravelWebsite"
              demoLink="https://travel-website-development.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidDashboard}
              isBlog={false}
              title="Covid Dashboard"
              description="Covid Dashboard built with React JS, Material UI, Leaflet, Chartjs2. The Application fetches the realtime data from disease.sh and display in 4 different formats - Card view, Map view, Table view and Chart view. Have features which allows user to search the data for specific country."
              ghLink="https://github.com/saitejakalepu/Covid19-dashboard"
              demoLink="https://saitejakalepu.github.io/Covid19-dashboard/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zomato}
              isBlog={false}
              title="Hello Foodie"
              description="Food Delivery Application build with React JS. User can view or filter all the nearby restaurants."
              ghLink="https://github.com/saitejakalepu/Food-Delivery-App-FrontEnd"
              demoLink="https://saitejakalepu.github.io/Food-Delivery-App-FrontEnd/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoList}
              isBlog={false}
              title="Todo List"
              description="To-Do List built using React JS and Redux. User can add list of tasks planned for the day and later mark the task as completed. Additionally user can edit or delete the task from the list. Since all the tasks are stored in local storage user can visit the application whenever required and update the task."
              ghLink="https://github.com/saitejakalepu/TodoList-Redux"
              demoLink="https://saitejakalepu.github.io/TodoList-Redux/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A famous Two Player game built using React JS."
              ghLink="https://github.com/saitejakalepu/Tic-Tac-Toe_Game"
              demoLink="https://saitejakalepu.github.io/Tic-Tac-Toe_Game/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
