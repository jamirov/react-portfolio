import React, { Component } from 'react';
import Pdf from "../documents/Jasur A full stack dev resume.pdf";

class Learn extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Here is my resume</a>
        </div>
    );

  }
}



export default Learn;
