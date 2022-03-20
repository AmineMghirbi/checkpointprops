import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
  props.handleName(props.fullName);
  const nameStyle={color:'red'};
  return (
    <div>
      <h2 style={nameStyle}>{props.fullName}</h2>
      <h2>{props.bio}</h2>
      <h2>{props.profession}</h2>
        {props.children}
    </div>
  )
}

Profile.prototype= {

  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string

}


export default Profile

