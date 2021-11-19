import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Home from "./component/Home/Home"
import logo from "./image/logo.png"
import home from "./image/home.svg"
import news from "./image/news.svg"
import music from "./image/music.ogg"
import "./main.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo:300,
     
    };

  }
  render() {
    return (
      <Router>
        <div className="header">
          <NavLink className="logo-hufi" to="/Home">
              <img src={logo} alt="logo" width="260px"/>
          </NavLink>
          <form className="search">
              <input className="search-input" type="text" name="name" placeholder="Tìm kiếm..."/>
              {/* <input type="submit" value="Submit" /> */}
          </form>
          <div className="navbar">
            <NavLink className="nav-home" to="/Home">
              <img src={home} alt="" width="14px"/>&nbsp;
              Trang chủ</NavLink>
            <NavLink className="nav-news" to="/News">
              <img src={news} alt="" width="11px"/>&nbsp;
              Tin tức</NavLink>
          </div>
                 
        </div>

        <Switch>
          <Route exact path="/Home" component={Home} />
        </Switch>
        <ReactAudioPlayer className="music"
        src={music}
        autoPlay={true}
        controls
        />
      </Router>
    );
  }
}
export default App;
