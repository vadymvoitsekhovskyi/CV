import React from 'react'

interface HeroSectionProps {
    children?: React.ReactNode
}

const HeroSection: React.FC<HeroSectionProps> = ({children}) => {
    return (
        <div className="hero-section">
            <picture className="full-width-resume">
                <source media="(max-width: 768px)" srcSet="/images/profile_mobile.png"/>
                <img src="/images/profile.png" alt="..."/>
            </picture>
            {children}
        </div>
    )
}

export default HeroSection