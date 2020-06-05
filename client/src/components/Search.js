import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {useHistory} from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  useEffect(() => {
    document.body.className = 'body-bg-image';
  }, []);
  
  const [formData, setFormData] = useState({
    platform: 'psn',
    gamertag: ''
  });

  const {platform, gamertag} = formData;
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(gamertag === ''){
      toast.dark('Please fill out all fields');
    } else{
      history.push(`/profile/${platform}/${gamertag}`);
    }
  }

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  return (
    <section className="search">
      <h1>Track Player Stats</h1>
      <ToastContainer autoClose={4000} position="top-right" hideProgressBar={false} closeOnClick draggable pauseOnHover pauseOnFocusLoss newestOnTop={false} />
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="platform">Platform</label>
          <select name="platform" id="platform" onChange={e => onChange(e)}>
            <option value="psn">Playstation</option>
            <option value="xbl">Xbox Live</option>
            <option value="origin">Origin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gamertag">Gamertag</label>
          <input type="text" name="gamertag" id="gamertag" onChange={e => onChange(e)} />
          <small>Origin ID, Xbox Live gamertag, PSN ID, etc.</small>
        </div>
        <div className="form-group">
          <input type="submit" value="Search" className="btn"/>
        </div>
      </form>
    </section>
  )
}

export default Search;