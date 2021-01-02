import React from 'react';

function Contact(){
    return (
        <div>
                <div className="container">
      <div className="row">
        <div className="col-md-6" id="myform">
          <div className="card  mb-3" style={{width: "60rem"}}>
            <div className="card-header">Contact</div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="form-group col">
                    <label form="validationDefault01">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label for="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="inputEmail4"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" id="conBtn" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Contact;