import React from 'react'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'

const About = ({ history }) => (
    <div className="text-page">
        <Navbar history={history} />
        <Section title="About Gibraltar">
            <h3 className="left-title">Property Sales in Spain & Gibraltar</h3>
            <p className="section-text">
                Gibraltar, known as The Rock, (or simply 'Gib'), is an overseas territory of the United Kingdom sitting at the
                entrance to the Mediterranean Sea. It is bordered by Spain to the north and the people of Gibraltar are
                ferociously loyal British citizens despite being bilingual in English and Spanish. It has a population of
                approx. 32,000 but over 12,000 workers and tourists enter on a daily basis and It has an area of
                6.7 km 2  (2.6 sq mi)
            </p>

            <h3 className="left-title">Few Facts about Gibraltar</h3>
            <ul>
                <li>The currency is Sterling £</li>
                <li>Interest Rates are set by the Bank of England</li>
                <li>Approx. 65% of the population live on Reclaimed Land</li>
                <li>Gibraltar has 10% Corporation Tax</li>
                <li>There is no VAT, Capital Gains, Wealth or Inheritance Tax</li>
                <li>It has 320 days a year on average of sun</li>
                <li>It has an extremely low crime rate</li>
                <li>Their economy has grown every year for the last 10 years</li>
            </ul>

            <h3 className="left-title">Getting to and into Gibraltar</h3>
            <p className="section-text">
                Gibraltar Airport has daily scheduled flights to and from London Gatwick, Heathrow, Bristol and Manchester
                in the UK. Royal Air Maroc have services to Casablanca and Tangier also.<br /><br />

                Gibraltar is not part of the Schengen Area or EU Customs Union. This means that there are immigration
                and customs controls when entering and leaving Gibraltar. Citizens of the European Union are required to
                have a national identity card or passport, while all others are required to have a passport to enter.
            </p>
        </Section>
        <Footer />
    </div>
)

export default About