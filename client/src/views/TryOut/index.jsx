import React from 'react';
import TemplatePicker from '../../Components/TemplatePicker';
import ThemePicker from '../../Components/ThemePicker';

import './style.scss';

const TryOut = () => {
    return (
        <div className="template-theme-container">
            <TemplatePicker />
            
            <ThemePicker />
        </div>
    );
}
 
export default TryOut;