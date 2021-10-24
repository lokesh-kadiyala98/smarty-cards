import React from 'react';

import './style.scss';

class TemplatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            templatePicked: "",
            themePicked: "",
            currentStep: 0
        }
    }

    handleTemplatePickedChange = (template) => {
        const {templatePicked} = this.state;

        if (template !== templatePicked) {
            this.setState({ templatePicked: template })
        } else {
            this.setState({ templatePicked: "" })
        }
    }

    handleThemeChange = (theme) => {
        const {themePicked} = this.state

        if (theme !== themePicked) {
            this.setState({ themePicked: theme })
        } else {
            this.setState({ themePicked: "" })
        }
    }

    onNextClick = (step) => {
        switch (step) {
            case 'SHOW_THEME_PICKER':
                this.setState({ currentStep: 1 })
                break;
            case 'SHOW_TEMPLATE_PICKER':
                this.setState({ currentStep: 0 })
                break;
            default:
                console.log(step, 'unknown in onNextClick')
        }
    }

    render() { 

        const {
            state: { 
                templatePicked, 
                themePicked,
                currentStep
            }
        } = this;

        return (
            <div className="template-theme-container">

                <div className={currentStep === 0 ? "template-picker-view" : "template-picker-view slide-out"}>

                    <div 
                        className={templatePicked==="FLIP_CARD"?"template flip-card selected":"template flip-card"}
                        onClick={() => this.handleTemplatePickedChange('FLIP_CARD')}>

                        {templatePicked === 'FLIP_CARD' && <i className="fas fa-check-circle"></i>}
                        
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
                        className={templatePicked==="OPTIONS_CARD"?"template options-card selected":"template options-card"} 
                        onClick={() => this.handleTemplatePickedChange('OPTIONS_CARD')}>
                        
                        {templatePicked==='OPTIONS_CARD' && <i className="fas fa-check-circle"></i>}
                    
                        <div className="question">
                            Question
                        </div>

                        <div className="options">
                            <ul>
                                <li>Option</li>
                                <li>Option</li>
                                <li>Option <i className="fas fa-check"></i></li>
                            </ul>
                        </div>
                    </div>

                    <button className={templatePicked ? "btn fade-in": "btn"} onClick={() => this.onNextClick('SHOW_THEME_PICKER')}>
                        Next <span className="arrow right"></span>
                    </button>
                </div>

                <div className="theme-picker-view">

                    <div 
                        className={themePicked==="VOCAB"?"theme selected":"theme"} 
                        onClick={() => this.handleThemeChange('VOCAB')}>

                        {themePicked === 'VOCAB' && <i className="fas fa-check-circle"></i>}
                        
                        <div style={{margin: 'auto'}}>
                            <p>Vocab</p>
                        </div>
                    </div>

                    <div className={themePicked==="COUNTRIES_AND_CAPITALS"?"theme selected":"theme"} onClick={() => this.handleThemeChange('COUNTRIES_AND_CAPITALS')}>
                        {themePicked === 'COUNTRIES_AND_CAPITALS' && <i className="fas fa-check-circle"></i>}
                        
                        <div style={{margin: 'auto'}}>
                            <p>Countries &</p>
                            <p>Capitals</p>
                        </div>
                    </div>

                    <button className={"btn back"} onClick={() => this.onNextClick('SHOW_TEMPLATE_PICKER')}>
                        <span className="arrow left"></span> Back
                    </button>

                    <button className={themePicked ? "btn fade-in": "btn"} onClick={() => this.onNextClick('COMMIT_TO_STATE')}>
                        Next <span className="arrow right"></span>
                    </button>
                </div>
                {/**/}
            </div>
        );
    }
}
 
export default TemplatePicker;