import React from 'react'
import './section.css'

const Section = ({ title, subtitle, children }) => (
    <section className="section">
        {subtitle ? <h4 className="sec-subtitle">{subtitle}</h4> : ''}
        <div className="divider" />
        <h2 className="sec-title">{title}</h2>
        {children}
    </section>
)

export default Section