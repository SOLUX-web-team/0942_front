import React, { Component } from "react";
import './TitleCategory.css';
import { useMediaQuery } from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
    return `${value}°C`;
}


export default function TitleCategory(props) {

    const [value, setValue] = React.useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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

    return (
        <div>
            <div className="titlecateg_title_div">
                <div className="titlecateg_title_innerdiv">
                    <h1 className="titlecateg_h1">용산구 청파동 OO 건물</h1>
                </div>


            </div>
            {props.slider === true ?
                <div className="titlecateg_title_div" >
                    <div className="titlecateg_category_div">
                        <h2 className="titlecateg_category_h2">전체</h2>
                        <h2 className="titlecateg_category_h2_center" >음식</h2>
                        <h2 className="titlecateg_category_h2">생활</h2>
                    </div>
                    <div className="titlecateg_slide_div">
                        <div>
                            <p onClick={() => { setValue(1); console.log("clickl") }} className="titlecateg_slide_grid">동</p>
                        </div>
                        <div className="titlecateg_slider_div" >
                            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" marks min={1} max={2} step={1} />

                        </div>
                        <p onClick={() => { setValue(2); console.log("click") }} className="titlecateg_slide_grid" >건물</p>
                    </div>
                </div>
                :
                ""
            }

        </div>
    )
}