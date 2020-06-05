import {GET_PROFILE, PROFILE_ERROR} from '../actions/types';

const initialState = {
  loading: true,
  error: null,
  profileData: null
}

export default function(state = initialState, action){
  const {type, payload} = action

  switch(type){
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        error: null,
        profileData: payload
      }
    case PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        profileData: null
      }
    default:
      return state;
  }
}