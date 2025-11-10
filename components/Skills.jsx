import React from 'react'
import MagicBento from './MagicBento'
import ScrollVelocity from './ScrollVelocity';

const Skills = () => {
    return (
        <>
        <div id='skills' className="mt-25">
            <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            />
        </div>

    <ScrollVelocity
        texts={["Building Futuristic Web Experiences 🌌 • Clean Code 💻 • Pixel Perfect Design 🎨 • Always Learning 🔁 • Automate. Animate. Elevate. ⚡"
, "Code. Create. Deploy. Repeat 🔁 • Innovation Never Sleeps 🌙 • Precision in Every Pixel ✨ • Design Meets Logic 💡"
]}
        velocity={100}
        className="custom-scroll-text text-[44px]"
    />
    </>
    )
}

export default Skills