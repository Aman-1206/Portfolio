import React from 'react'
import TrueFocus from './Truefocus';

const AboutWord = () => {
    return (

        <TrueFocus
            sentence="Web Developer That Simply Works"
            manualMode={false}
            blurAmount={3}
            borderColor="cyan"
            animationDuration={0.2}
            pauseBetweenAnimations={1}
        />
    )
}

export default AboutWord