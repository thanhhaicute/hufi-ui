import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import avata from "../../image/avata.png"
import remind from "../../image/remind.svg"
import calenderlearn from "../../image/calenderlearn.svg"
import calendarexam from "../../image/calendarexam.svg"
import tracuucongnu from "../../image/congno.png"
import dangkyhocphan from "../../image/dangkyhocphan.png"
import ketquahoctap from "../../image/hoctap.png"
import hopthusinhvien from "../../image/hopthusinhvien.png"
import chuongtrinhkhhung from "../../image/khungchuongtrinh.png"
import lichhoctuan from "../../image/lichhoc.png"
import lichtheotiendo from "../../image/lichtheotiendo.png"
import nhacnho from "../../image/nhacnho.png"
import phieuthutonghop from "../../image/phieuthutonghop.png"
import thanhtoannoitru from "../../image/thanhtoannoitru.png"
import thanhtoantructuyen from "../../image/thanhtoantructuyen.png"

import "../Home/boxList.css"
import "../Home/home.css"
import "../Home/footer.css"
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
              {/* CAC BOX CHON */}
              <div className="box-list">
                <div className="box-nhacnho">
                  <img className="fa-nhacnho" src={nhacnho} alt=""/>
                  <NavLink className="active-nhacnho" to="/remind">Nhắc nhở</NavLink>
                </div>
                <div className="box-ketquahoctap">
                  <img className="fa-ketquahoctap" src={ketquahoctap} alt=""/>
                  <NavLink className="active-ketquahoctap" to="/ketquahoctap">Kết quả học tập</NavLink>
                </div>
                <div className="box-lichhoctuan">
                  <img className="fa-lichhoctuan" src={lichhoctuan} alt=""/>
                  <NavLink className="active-lichhoctuan" to="/calenderlearn">Lịch theo tuần</NavLink>
                </div>
                <div className="box-lichtheotiendo">
                  <img className="fa-lichtheotiendo" src={lichtheotiendo} alt=""/>
                  <NavLink className="active-lichtheotiendo" to="/lichtheotiendo">Lịch theo tiến độ</NavLink>
                </div>
                <div className="box-chuongtrinhkhhung">
                  <img className="fa-chuongtrinhkhhung" src={chuongtrinhkhhung} alt=""/>
                  <NavLink className="active-chuongtrinhkhhung" to="/chuongtrinhkhung">Chương trình khung</NavLink>
                </div>
                <div className="box-dangkyhocphan">
                  <img className="fa-dangkyhocphan" src={dangkyhocphan} alt=""/>
                  <NavLink className="active-dangkyhocphan" to="/dangkyhocphan">Đăng ký học phần</NavLink>
                </div>
                <div className="box-tracuucongnu">
                  <img className="fa-tracuucongnu" src={tracuucongnu} alt=""/>
                  <NavLink className="active-tracuucongnu" to="/tracuucongnu">Tra cứu công nợ</NavLink>
                </div>
                <div className="box-thanhtoantructuyen">
                  <img className="fa-thanhtoantructuyen" src={thanhtoantructuyen} alt=""/>
                  <NavLink className="active-thanhtoantructuyen" to="/thanhtoantructuyen">Thanh toán trực tuyến</NavLink>
                </div>
                <div className="box-thanhtoannoitru">
                  <img className="fa-thanhtoannoitru" src={thanhtoannoitru} alt=""/>
                  <NavLink className="active-thanhtoannoitru" to="/thanhtoannoitru">Thanh toán nội trú</NavLink>
                </div>
                <div className="box-phieuthutonghop">
                  <img className="fa-phieuthutonghop" src={phieuthutonghop} alt=""/>
                  <NavLink className="active-phieuthutonghop" to="/phieuthutonghop">Phiếu thu tổng hợp</NavLink>
                </div>
                <div className="box-hopthusinhvien">
                  <img className="fa-hopthusinhvien" src={hopthusinhvien} alt=""/>
                  <NavLink className="active-hopthusinhvien" to="/hopthusinhvien">Hộp thư sinh viên</NavLink>
                </div>
              </div>

              {/* Footer */}
              <div className="box-footer">
                
                  <div className="box-bangdiem"></div>
                  <div className="box-tiendohoctap"></div>
                  <div className="box-lophocphan"></div>

              </div>
          </div>
                 
      </Router>
    );
  }
}
export default Home;