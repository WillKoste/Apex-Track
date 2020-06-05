import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfileData} from '../actions/profile';

const Profile = ({match, getProfileData, profile: {profiledata, loading}}) => {
  useEffect(()=> {
    getProfileData(match.params.platform, match.params.gamertag);
    
  }, [getProfileData, match.params.platform, match.params.gamertag]);
  
  return (
    <div>
      <h1>{profiledata}</h1>
    </div>
  )
}

Profile.propTypes = {
  getProfileData: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {getProfileData})(Profile);