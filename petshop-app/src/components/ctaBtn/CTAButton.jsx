import React from 'react';
import './CTAButton.css';

const CTAButton = ({ text, onClick }) => {
    return (
        // onClick - elemento que ativa quando clicar executa uma ação
        <button className="cta-button" onClick={onClick}>
            {text}
        </button>
    );
};

export default CTAButton;