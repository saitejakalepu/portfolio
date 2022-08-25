import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import firebaseData from "../../firebase";

function AboutCard() {
  const [about, setAbout] = useState([]);
  useEffect(()=>{
    firebaseData.database().ref("about").on("value",snapshot=>{
   setAbout(snapshot.val());
    });
   },[])

console.log(about);
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Teja Kalepu </span>
            from <span className="purple"> Hyderabad, Telangana, India.</span>
            <br />I am a {about.position} , <span className="purple">{about.role}</span> &nbsp;currently working at {about.company}
            <br />I have {about.experience} years of experience in developing UI for web applications with <span className="purple">{about.Skill} </span>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies/Web-Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Teja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
