import React, { useState } from 'react'

export const PanelItem = ({ panel }) => {
    const { idpanel, texto: arrTexto, estado, backgroundUrl } = panel;
    const [isOpen, setIsOpen] = useState(estado);
    const [isTransitionEnd, setIsTransitionEnd] = useState(isOpen);

    const divStyle = {
        backgroundImage: 'url(' + backgroundUrl + ')',
    };

    const toggleOpen = (e) => {
        setIsOpen(!isOpen);
    }

    const toggleTransition = (e) => {
        if (e.propertyName === 'flex-grow') {
            setIsTransitionEnd(isOpen);
        }
    }

    return (
        <div className={`panel panel${idpanel}` + (isOpen ? ' open' : '') + (isTransitionEnd ? ' open-active' : '')}
            onClick={toggleOpen}
            onTransitionEnd={toggleTransition}
            style={divStyle}>
            {
                arrTexto.map(txt => (
                    <p key={txt}>{txt}</p>
                ))
            }
        </div>
    )

}
