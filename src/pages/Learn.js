import React, { Component } from 'react';
import Pdf from "../documents/Jasur A full stack dev resume.pdf";

class Learn extends Component {

  render() {

    return (
        <div className = " mt-10 App">
          <a className="text-white " href = {Pdf} target = '_blank'> <h5>Click here download my resume</h5></a>
        </div>
    );

  }
}



export default Learn;
