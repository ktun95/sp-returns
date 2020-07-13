import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const withToolTip = Slider.createSliderWithTooltip;
const Range = withToolTip(Slider.Range)

export default ({handleSliderChange, ...props}) => {
    return (
        <>
            <Range onAfterChange={handleSliderChange} {...props} /> 
        </>
    )
}


