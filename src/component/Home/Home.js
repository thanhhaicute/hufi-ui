import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import boxList from './boxList';
import avata from "../../image/avata.png"
import remind from "../../image/remind.svg"
import calenderlearn from "../../image/calenderlearn.svg"
import calendarexam from "../../image/calendarexam.svg"

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
      numberRemind:12,
      numberLearn:2,
      numberExam: 5,
    };

  }
  render() {
    return (
      <Router>
          <div className="main-home">
              <div className="info-student">
                <div className="portlet-title">
                  <div className="caption-hufi">Thông tin sinh viên</div>
                </div><hr/>

                <div className="col-sm">
                  <div className="img-reponsive">
                      <img src={avata} alt="" width="115px"/>
                  </div>
                  <NavLink className="color-active" to="/account">Xem chi tiết</NavLink>
                </div>
                <div className="form-flex">
                  <div className="form-body1">
                    <span>MSSV :<span className="font-form1">{this.state.accountData.mssv}</span></span><p/>
                    <span>Họ tên :<span className="font-form1">{this.state.accountData.nameSV}</span></span><p/>
                    <span>Giới tính :<span className="font-form1">{this.state.accountData.gioiTinh}</span></span><p/>
                    <span>Ngày sinh :<span className="font-form1">{this.state.accountData.ngaySinh}</span></span><p/>
                    <span>Nơi sinh :<span className="font-form1">{this.state.accountData.noiSinh}</span></span><p/>
                  </div>
                  <div className="form-body2">
                    <span>Lớp học :<span className="font-for2">{this.state.accountData.lopHoc}</span></span><p/>
                    <span>Khóa học :<span className="font-form2">{this.state.accountData.khoaHoc}</span></span><p/>
                    <span>Bậc đào tạo :<span className="font-form2">{this.state.accountData.bacDaoTao}</span></span><p/>
                    <span>Loại hình đào tạo :<span className="font-form2">{this.state.accountData.loaiHinhDaoTao}</span></span><p/>
                    <span>Ngành :<span className="font-form2">{this.state.accountData.nganhHoc}</span></span><p/>
                  </div>
                </div>
              </div>
                
              

              <div className="box-three">
                  <div className="remind-box">
                      <div className="name-remid">Nhắc nhở mới, chưa xem</div>
                      <div className="number-remid">{this.state.numberRemind}</div>
                      <img className="fa-bel" src={remind} alt=""/>
                      <NavLink className="active-remind" to="/remind">Xem chi tiết</NavLink>
                  </div>

                  <div className="box-calender">
                    <div className="calender-learn">
                      <div className="name-calenderlearn">Lịch học trong tuầnm</div>
                      <div className="number-calenderlearn">{this.state.numberLearn}</div>
                      <img className="fa-learn" src={calenderlearn} alt=""/>
                      <NavLink className="active-calenderlearn" to="/calenderlearn">Xem chi tiết</NavLink>
                    </div>
                    <div className="calender-exam">
                      <div className="name-calenderexam">Lịch thi trong tuần</div>
                      <div className="number-calenderexam">{this.state.numberExam}</div>
                      <img className="fa-exam" src={calendarexam} alt=""/>
                      <NavLink className="active-calenderexam" to="/calenderexam">Xem chi tiết</NavLink>
                    </div>
                  </div>             
              </div>
          </div>

          <boxList/>

          
      </Router>
    );
  }
}
export default Home;