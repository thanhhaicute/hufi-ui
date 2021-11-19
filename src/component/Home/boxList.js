import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import "../Home/boxList.css"
class boxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo:300,
     
    };

  }
  render() {
    return (
      <Router>
          <span>Hello work</span>
            {/* <div className="box-list">
              <div className="box-nhacnho"></div>
              <div className="box-ketquahoctap"></div>
              <div className="box-lichhoctuan"></div>
              <div className="box-lichtheotiendo"></div>
              <div className="box-chuongtrinhkhhung"></div>
              <div className="box-dangkyhocphan"></div>
              <div className="box-tracuucongnu"></div>
              <div className="box-thanhtoantructuyen"></div>
              <div className="box-thanhtoannoitru"></div>
              <div className="box-phieuthutonghop"></div>
              <div className="box-hopthusinhvien"></div>
          </div> */}

      </Router>
    );
  }
}
export default boxList;
