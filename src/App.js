import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import avata from "./image/avata.png"
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
      accountName:"Donnal Trump"
    };

  }
  render() {
    return (
      <Router>
        <div className="header">
          <NavLink className="logo-hufi" to="/">
              <img src={logo} alt="logo" width="260px"/>
          </NavLink>
          <form className="search">
              <input className="search-input" type="text" name="name" placeholder="Tìm kiếm..."/>
              {/* <input type="submit" value="Submit" /> */}
          </form>
          <div className="navbar">
            <NavLink className="nav-home" to="/">
              <img src={home} alt="" width="14px"/>&nbsp;
              Trang chủ</NavLink>
            <NavLink className="nav-news" to="/news">
              <img src={news} alt="" width="11px"/>&nbsp;
              Tin tức</NavLink>

              <div className="account-id">
                <img className="avata-header" src={avata} alt=""/>
                <select className="select-id">
                  <option value="name-account">{this.state.accountName}</option>
                  <option value="info-account">Thông tin tài khoản</option>
                  <option value="change-password">Đổi mật khẩu</option>
                  <option value="out-login">Đăng xuất</option>
                </select>
              </div>
          </div>
                 
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
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
