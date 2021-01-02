import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio(){
  return(
   <div>
        <Container id="myPr">

        <Row>
        <Col md="4" id="port1">
        <div className="card" style={{width: '15rem', height: '15rem'}} >
        <img className="card-img-top" src="./assets/remindBags.jpg" alt="Card image" />
        <div className="card-img-overlay">
           
           <button type="button" className="btn btn-info btn-lg" id="viewBtn" data-toggle="modal" data-target="#myModal1">View</button>
        </div>
       </div>
      </Col>

      
      <Col md="4" id="port2">
                <div class="card" style={{width: '15rem', height: '15rem'}}>
                  <img class="card-img-top" src="./assets/img1.png" alt="Card image" />
                  <div class="card-img-overlay">
                      
                       
                     <button type="button" class="btn btn-info btn-lg" id="viewBtn" data-toggle="modal" data-target="#myModal2">View</button>
                    
                  </div>
                </div>
              </Col>
             
            <Col md="4" id="port3">
              <div class="card" style={{width: '15rem', height: '15rem'}}>
                <img class="card-img-top" src="./assets/pG.png" alt="Card image" />
                <div class="card-img-overlay">
                    

                     <button type="button" class="btn btn-info btn-lg" id="viewBtn" data-toggle="modal" data-target="#myModal">View</button>
                </div>
              </div>
            
              </Col>
          
    </Row>
    <Row>
            <Col md="4" id="port4">
              <div class="card" style={{width: '15rem', height: '15rem'}}>
                <img class="card-img-top" src="./assets/burger.png" alt="Card image" />
                <div class="card-img-overlay">
                   
  
                     <button type="button" class="btn btn-info btn-lg" id="viewBtn" data-toggle="modal" data-target="#myModal4">View</button>
                </div>
              </div>
            </Col>
          </Row>

     
        





      <div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">

    <div className="modal-content" style={{Color: 'black'}}>
      <div className="modal-header">
        
        <h4 className="modal-title">Password Generator</h4>
      </div>
      <div className="modal-body">
        <img className="image-fluid" src="./assets/pG.png" id="pImg" style={{height: '250px' , width: '100%'}}  /> 
        <p>Generates a random password</p>
        <p>Languages/Technologies used: JavaScript</p>
        <p>Github Repository Link: <span><a href="https://github.com/ThaliaRowan/password_Generator.github.io.git" target="_blank">See Repository</a></span></p>
        <button id="pl1">
          <a href="https://thaliarowan.github.io/password_Generator.github.io/" target="_blank">See Page</a>
        </button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal" id="m1">Close</button>
      </div>
    </div>

  </div>
</div>



<div id="myModal2" class="modal fade" role="dialog">
  <div class="modal-dialog">

   
    <div class="modal-content" style={{color: 'black'}}>
      <div class="modal-header">
        
        <h4 class="modal-title">Weather Dashboard</h4>
      </div>
      <div class="modal-body">
        <img src="./assets/img1.png" id="pImg"  style={{height: '250px' , width: '100%'}} /> 
        <p>Displays weather forcast of current day and future five days for cities searched.</p>
        <p>Languages/Technologies used: JavaScript/ jQuery and OpenWeatherMap API</p>
        <p>Github Repository Link: <span><a href="https://github.com/ThaliaRowan/weather_Dashboard.github.io.git" target="_blank">See Repository</a></span></p>
        <button id="pl2">
          <a href="https://thaliarowan.github.io/weather_Dashboard.github.io/" target="_blank">See Page</a>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" id="m2">Close</button>
      </div>
    </div>

  </div>
</div>



<div id="myModal1" class="modal fade" role="dialog">
  <div class="modal-dialog">

  
    <div class="modal-content" style={{color: 'black'}}>
      <div class="modal-header">
        
        <h4 class="modal-title">Remember the Bags</h4>
      </div>
      <div class="modal-body">
        <img src="./assets/remindBags.jpg" id="pImg"   style={{height: '250px' , width: '100%'}} /> 
        <p>Reminds you to not leave your reusable plastic bag indide the car as you arrive at your grocery.</p>
        <p>Languages/Technologies used: JavaScript, OpenWeatherMap API, Google Maps API, </p>
        <p>Github Repository Link: <span><a href="https://github.com/dougdavidoff/bags.git" target="_blank">See Repository</a></span></p>
        <button id="pl3">
          <a href="https://dougdavidoff.github.io/bags/index.html" target="_blank" >See Page</a>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" id="m3">Close</button>
      </div>
    </div>

  </div>
</div>



<div id="myModal4" class="modal fade" role="dialog">
  <div class="modal-dialog">

   
    <div class="modal-content" style={{color: 'black'}}>
      <div class="modal-header">
        
        <h4 class="modal-title">EAT-DA-Burger</h4>
      </div>
      <div class="modal-body">
        <img src="./assets/burger.png" id="pImg"  style={{width: '100%'}} /> 
        <p>Allows users to devour a burger and uneat it. This stores the users input into a database.</p>
        <p>Technologies used: JavaScript,JQuery, Nodejs,Mysql, Express, handlebars </p>
        <p>Github Repository Link: <span><a href="https://github.com/ThaliaRowan/burger.git" target="_blank">See Repository</a></span></p>
        <button id="pl3">
          <a href=" https://glacial-falls-49922.herokuapp.com/" target="_blank" >See Page</a>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" id="m3">Close</button>
      </div>
    </div>

  </div>
</div>



</Container>
  </div> 

  );
}

export default Portfolio;