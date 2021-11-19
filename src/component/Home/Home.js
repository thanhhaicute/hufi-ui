import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import avata from "../../image/avata.png"
import remind from "../../image/remind.svg"
import "../Home/home.css"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo:300,
      accountData: {
        mssv: 2001206969,
        nameSV: "Donnal Trump",
        gioiTinh:"Nam",
        ngaySinh:"20/02/1999",
        noiSinh:"TP Hồ Chí Minh",
        lopHoc:"11THDH11",
        khoaHoc:2020,
        bacDaoTao:"Đại học",
        loaiHinhDaoTao:"Chính quy",
        nganhHoc:"Công nghệ thông tin"
      },
    };

  }
  render() {
    return (
      <Router>
          <div className="main-home">
              <div className="info-student">
                  <div className="info-text">
                    <span>Thông tin sinh viên</span>
                  </div>
                  <hr/>
                  <div className="info-avatar">
                    <img src={avata} alt="" width="172px"/>
                  </div>
                  <NavLink className="link-account" to="/account">
                      Xem chi tiết
                  </NavLink>

                  <div className="text-info-account">
                    <span>MSSV: {this.state.accountData.mssv}</span><p/>
                    <span>Họ tên: {this.state.accountData.nameSV}</span><p/>
                    <span>Giới tính: {this.state.accountData.gioiTinh}</span><p/>
                    <span>Ngày sinh: {this.state.accountData.ngaySinh}</span><p/>
                    <span>Nơi sinh: {this.state.accountData.noiSinh}</span><p/>
                  </div>

                  <div className="text-info-account1">
                    <span>MSSV: {this.state.accountData.lopHoc}</span><p/>
                    <span>Họ tên: {this.state.accountData.khoaHoc}</span><p/>
                    <span>Giới tính: {this.state.accountData.bacDaoTao}</span><p/>
                    <span>Ngày sinh: {this.state.accountData.loaiHinhDaoTao}</span><p/>
                    <span>Nơi sinh: {this.state.accountData.nganhHoc}</span><p/>
                  </div>

                  
              </div>
              <div className="info-box1">
                  <div className="box1-top">
                      <div className="text-remind">
                        <span>Nhắc nhở mới, chưa xem</span>
                      </div>
                      <span className="number-remind">0</span>
                      <NavLink to="/remind">
                          Xem liên kết
                      </NavLink>
                      {/* <img src={remind} alt=""/> */}
                  </div>
                  <div className="box1-bottom">
                      <div className="box1-bottom-left"></div>
                      <div className="box1-bottom-right"></div>
                  </div>
              </div>
          </div>

          
      </Router>
    );
  }
}
export default Home;