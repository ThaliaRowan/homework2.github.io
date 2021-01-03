import React from 'react';
import {Card, Row} from 'react-bootstrap';
import  img1 from "../assets/img1.png";
import remindBags from "../assets/remindBags.jpg";
import PG from "../assets/pG.png"
import Burger from "../assets/burger.png"
import '../box.css'




function Project(){

    const projectInfo = [
        {
            
            img: PG,
            title: "Password Generator",
            desc: "Generates a random password",
            techno: "JavaScript",
            repoLink: "https://github.com/ThaliaRowan/password_Generator.github.io.git",
            pageLink: "https://thaliarowan.github.io/password_Generator.github.io/"
        },
        {
            
        img: img1,
        title: "Password Generator",
        desc: "Weather Dashboard",
        techno: "JavaScript, JQuery, OpenWeatherMap API",
        repoLink: "https://github.com/ThaliaRowan/weather_Dashboard.github.io.git",
        pageLink: "https://thaliarowan.github.io/weather_Dashboard.github.io/"
        }
    ]


    const projectCard = (card, index) => {
        return (
            <div>
                <Card className="box" style={{width: "18rem"}} key={index}>
                <Card.Img className="card-img-top" src={card.img} alt="Card image cap" />
            <Card.Body>
            <Card.Title>{card.title}</Card.Title>
           
            <Card.Text><span>Description:</span>{card.desc}</Card.Text>
                <Card.Text><span>Technologies:</span>{card.techno}</Card.Text>
                <Row>
                <Card.Link href={card.repoLink} className="card-link">Project Github Repository</Card.Link>
                </Row>
            
            <Card.Link href={card.pageLink} className="card-link">Project deployed Page</Card.Link>
            </Card.Body>
                </Card>
            </div>
        );
    }


    return(
        <div className="grid">
            { projectInfo.map(projectCard)}
        </div>
    );
}


export default Project;