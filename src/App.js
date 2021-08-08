import React, { useEffect } from "react";
import "./App.css";
import ScrollToTop from "./components/views/ScrollToTop";
import NavBar from "./components/views/NavBar/NavBar";
import LandingPage from "./components/views/LandingPage/LandingPage";
import MainPage from "./components/views/MainPage/MainPage";
import Footer from "./components/views/Footer/Footer";
import WritePage from "./components/views/WritePage/WritePage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import ReviewPage from "./components/views/ReviewPage/ReviewPage";
import DetailPage from "./components/views/DetailPage/DetailPage";
import ChattingPage from "./components/views/ChattingPage/ChattingPage";
import AboutUs from "./components/views/AboutUs/AboutUs";
import UserPage from "./components/views/UserPage/UserPage";
import { BrowserRouter, Route } from "react-router-dom";
import ChattingList from "./components/views/ChattingList/ChattingList";
import ScrapPage from "./components/views/ScrapPage/ScrapPage";


/*global kakao*/

function App() {
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude); //37....
      // console.log("Longitude is :", position.coords.longitude);//126~127...
      var geocoder = new kakao.maps.services.Geocoder();
  
      var coord = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          console.log('그런 너를 마주칠까 ' + result[0].address.address_name + '을 못가');
          localStorage.setItem("currentLocation",result[0].address.address_name);
        }
      };
      
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    });
    // KakaoMap();
  })
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <NavBar /> */}
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/write/:id" component={WritePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/review/:id" component={ReviewPage} />
      <Route exact path="/post/:id" component={DetailPage} />
      <Route exact path="/chat/:id" component={ChattingPage} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/chattinglist" component={ChattingList} />
      <Route exact path="/user/:id" component={UserPage} />
      <Route exact path="/:id/myScrap" component={ScrapPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
