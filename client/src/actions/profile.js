import axios from 'axios';
import {GET_PROFILE, PROFILE_ERROR} from './types';

export const getProfileData = (platform, gamertag) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/profile/${platform}/${gamertag}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.name
    });
  }
}