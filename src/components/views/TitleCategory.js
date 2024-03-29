import React, { Component, useState, useEffect } from "react";
import './TitleCategory.css';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import axios from "axios";
import { useHistory } from "react-router-dom";

function valuetext(value) {
    return `${value}°C`;
}

//props 인자종류
//props.slider = slider 유무
//props.category = 전체/음식/생활 카테고리 유무
//props.allType = 전체 클릭시 실행할 함수
//props.foodType = 음식 클릭시 실행할 함수
//props.objectType = 생활 클릭시 실행할 함수
export default function TitleCategory(props) {

    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [address, setAddress] = useState(localStorage.getItem("currentLocation"));

    useEffect(() => {
        const isLogined = window.localStorage.getItem("logined");
        const loggedInUser = window.localStorage.getItem("user");
        if (loggedInUser) {
            console.log("로그인됨!:", loggedInUser);
        }
        else{
            
        }
    }, [])


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    let history = useHistory();

    const goBack = () => {
        if (history.location.pathname.includes('/post')) {
            history.push('/main')
        }
        if (history.location.pathname.includes('/write')) {
            history.goBack();
        }
        if (history.location.pathname.includes('/main')) {
            history.push('/main')
        }
        history.push('/main')
    }

    return (
        <div>
            <div className="titlecateg_title_div">
                <div className="titlecateg_title_innerdiv" onClick={goBack}>
                    <h1 className="titlecateg_h1">{address}</h1>
                </div>


            </div>

            <div className="titlecateg_title_div" >
                {props.category === true ?
                    <div className="titlecateg_category_div">
                        <h2 onClick={() => { props.allType(); }} className="titlecateg_category_h2">전체</h2>
                        <h2 onClick={() => { props.foodType(); }} className="titlecateg_category_h2_center" >음식</h2>
                        <h2 onClick={() => { props.objectType(); }} className="titlecateg_category_h2">생활</h2>
                    </div>
                    :
                    ""
                }

                {props.slider === true ?

                    <div className="titlecateg_slide_div">
                        <div>
                            <p onClick={() => { setValue(1); console.log("clickl") }} className="titlecateg_slide_grid">동</p>
                        </div>
                        <div className="titlecateg_slider_div" >
                            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" marks min={1} max={2} step={1} />

                        </div>
                        <p onClick={() => { setValue(2); console.log("click") }} className="titlecateg_slide_grid" >건물</p>
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    )
}