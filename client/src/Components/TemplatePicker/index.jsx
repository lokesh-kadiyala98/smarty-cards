import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTryOut, setTemplate, setCurrentStep } from '../../store/tryOut';

const TemplatePicker = () => {
    const dispatch = useDispatch()

    const tryOut = useSelector(getTryOut)
    const {template: templatePicked, currentStep} = tryOut

    return ( 
        <div className={"template-picker-view " + (currentStep!==0 && "slide-out")}>
            <div 
                className={"template flip-card " + (templatePicked==="FLIP_CARD" && "selected")}
                onClick={() => dispatch(setTemplate('FLIP_CARD'))}>

                {templatePicked==='FLIP_CARD' && <i className="fas fa-check-circle"></i>}
                
                <div className="flip-card-inner">
                    <p className="flip-card-front">
                        Question
                    </p>

                    <p className="flip-card-back">
                        Answer
                    </p>
                </div>
            </div>

            <div 
                className={"template options-card "+ (templatePicked==="OPTIONS_CARD" && "selected")} 
                onClick={() => dispatch(setTemplate('OPTIONS_CARD'))}>
                
                {templatePicked==='OPTIONS_CARD' && <i className="fas fa-check-circle"></i>}
            
                <div className="question">
                    Question
                </div>

                <div className="options">
                    <ul>
                        <li>Option</li>
                        <li>Option</li>
                        <li>Option</li>
                    </ul>
                </div>
            </div>

            <button className={templatePicked ? "btn fade-in": "btn"} onClick={() => dispatch(setCurrentStep('SHOW_THEME_PICKER'))}>
                Next <span className="arrow right"></span>
            </button>
        </div>
    );
}
 
export default TemplatePicker;