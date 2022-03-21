import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Profilev2 extends Component {

    constructor(props){
        super(props);
        this.props.handleName(this.props.fullName);
    }
  render() {
    return (
      <div>
          <h1>{this.props.fullName}</h1>
          <h2>{this.props.bio}</h2>
          <h3>{this.props.profession}</h3>
          <img src={this.props.children} alt='Alternative image'/>
      </div>
    )
  }
  
}

Profilev2.defaultProps={
    fullName:"Amine",
    bio:"NADA",
    profession:"NADA",
    handleName:()=>{console.log("Default function is excuted")}
}


Profilev2.propTypes={
    fullName:PropTypes.oneOf(["Amine","Khalil","Hatem"]),
    bio:PropTypes.oneOfType([PropTypes.number,PropTypes.string])
}
export default Profilev2