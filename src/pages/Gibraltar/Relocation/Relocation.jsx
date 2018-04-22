import React from 'react'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'

const About = ({ history }) => (
    <div className="text-page">
        <Navbar history={history} />
        <Section title="Relocation">
            <p className="section-text">
                Our relocation service is hugely popular both with employers and employees. We are here to help from the
                moment you arrive.<br /><br />

                A few of the items we can help you with:
            </p>

            <h3 className="left-title">Gibraltar</h3>
            <ul>
                <li>ID cards</li>
                <li>Health cards</li>
                <li>Schooling & childcare</li>
                <li>Utility connections</li>
                <li>Vehicle issues</li>
                <li>Career assistance</li>
            </ul>

            <h3 className="left-title">Spain</h3>
            <ul>
                <li>NIE numbers</li>
                <li>Spanish utility connections</li>
                <li>Spanish driving licenses</li>
                <li>Translations</li>
                <li>Trafico assistance</li>
                <li>Spanish healthcare</li>
                <li>ITV help (MOT)</li>
            </ul>
        </Section>
        <Footer />
    </div>
)

export default About