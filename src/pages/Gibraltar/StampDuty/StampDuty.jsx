import React from 'react'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'

const About = ({ history }) => (
    <div className="text-page">
        <Navbar history={history} />
        <Section title="Stamp Duty">
            <p className="section-text">
                Stamp Duty Land Tax is the tax that the government charges when you purchase a property over
                £200,000. You will pay different rates depending on the value of the property and the amount of mortgage.
                No stamp duty is payable by first and second time buyers (excl. corporate ent000 of the purchase price.
            </p>

            <h3 className="left-title">Run down on rates:</h3>
            <ul>
                <li>Purchase price up to £200,000 is nil</li>
                <li>From £200,001 to £350,000 is 2% on the first £260,000 and 5.5% on the balance</li>
                <li>Over £350,000 is 3% on the first £350,000 and 3.5% on the balance</li>
            </ul>
            <p className="section-text">
                These rates can change so please always seek further professional advice.
            </p>
        </Section>
        <Footer />
    </div>
)

export default About