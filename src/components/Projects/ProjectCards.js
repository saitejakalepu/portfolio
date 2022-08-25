import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import dummy from "../../Assets/Projects/LaptopLoading.gif"

function ProjectCards(props) {
  const [loading , setLoading] = useState(true);

  function handleImageLoad()
  {
    setLoading(false);
  }
  
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={loading ? dummy : props.imgPath} alt="card-img"  onLoad={handleImageLoad}/>
      <Card.Body>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} className="project-text">
          {props.description}
        </Card.Text>
        <div className="btn-container">
          <Button variant="primary" href={props.ghLink} target="_blank" >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="demobtn"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
           )}
          </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
