import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTryOut, setTheme, setCurrentStep } from './../../store/tryOut';
import { THEMES } from './../../constants/themes';

const ThemePicker = () => {
    const dispatch = useDispatch()

    const tryOut = useSelector(getTryOut)
    const {theme: themePicked, currentStep} = tryOut
    
    return ( 
        <div className={currentStep===1?"theme-picker-view":"theme-picker-view slide-out"}>
            {THEMES.map(({theme, cardContent}) => 
                <div 
                    key={theme}
                    className={themePicked===theme ? "theme selected" : "theme"} 
                    onClick={() => dispatch(setTheme(theme))}>
    
                    {themePicked===theme && <i className="fas fa-check-circle"></i>}
                    
                    <div style={{margin: 'auto'}}>
                        {cardContent.map(content => <p>{content}</p>)}
                    </div>
                </div>
            )}

            <button className={"btn back"} onClick={() => dispatch(setCurrentStep('SHOW_TEMPLATE_PICKER'))}>
                <span className="arrow left"></span> Back
            </button>

            <button className={themePicked ? "btn fade-in": "btn"} onClick={() => dispatch(setCurrentStep('COMMIT_TO_STATE'))}>
                Next <span className="arrow right"></span>
            </button>
        </div>
    );
}
 
export default ThemePicker;