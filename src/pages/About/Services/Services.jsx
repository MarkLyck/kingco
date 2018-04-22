import React from 'react'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'

const Services = ({ history }) => (
    <div className="text-page">
        <Navbar history={history} />
        <Section title="Services">
            <h3 className="left-title">Property Sales in Spain & Gibraltar</h3>
            <p className="section-text">
                Our hard working team will manage the sales process from start to finish, including accurate & realistic
                market appraisals, state of the art marketing output methods and help with legal processes throughout the
                sale.<br /><br />

                We advertise on all major property portals as well as having an in-house Marketing & Social Media expert
                which is extremely beneficial for our sellers. We possess a wealth of experience and knowledge of the
                property market, local area & economy.<br /><br />

                Here at (insert name) we offer free market appraisals to help you sell, purchase or rent the right property at
                the correct price. We actively check the market to ensure you are competitive or getting the best deal.
            </p>

            <h3 className="left-title">Lettings in Spain & Gibraltar</h3>
            <p className="section-text">
                Covering all areas from Gibraltar to Marbella, we deal with long and short term lettings. We always
                endeavour to find the best quality tenants by using our on stringent reference checks and compiling a free
                report to landlords on the prospect new renters. We also aim to achieve the best possible rents and terms
                for landlords but also ensuring we have happy tenants. We highly recommend our property management
                service, which takes the headache, stress and time out of letting properties.<br /><br />

                Our Property Management is one of the best on the market and includes:
            </p>
            <ul>
                <li>Collection of deposit</li>
                <li>Tenancy agreement</li>
                <li>Full photographic & detailed inventories</li>
                <li>Collection of rent and efficient payment to landlords</li>
                <li>Arranging of repairs from our in-house maintenance team as well as trusted and approved contractors</li>
                <li>Undertaking inspections at renewal points</li>
                <li>Help with connection/disconnection of utilities</li>
                <li>Free advice service</li>
                <li>Organising a thorough clean by our in-house cleaning team</li>
            </ul>
            <p className="section-text">
                We will be your eyes, ears and main point of contact to ensure landlord & tenant peace of mind.<br /><br />

                We also take care of vacant properties whilst you are away. We can key hold, inspect & clean the property
                all to fit around your schedule.
            </p>

            <h3 className="left-title">Short Term Lets in Gibraltar & Spain</h3>
            <p className="section-text">
                We offer apartments, houses, villas & fincas in all shapes and sizes and to match all budgets throughout
                the whole year. We also offer a management service including advertising, meet and greet, contracts, key
                holding, checking out, inventories & feedback.
            </p>

            <h3 className="left-title">Commercial listings in Gibraltar & Spain</h3>
            <p className="section-text">
                If you are looking for a co-working desk, start up space, retail unit, office area or relocation of your business
                we have commercial lets and sales for all budgets & specs.
            </p>

            <h3 className="left-title">Relocation</h3>
            <p className="section-text">
                Our relocation service is hugely popular both with employers and employees. We are here to help from the
                moment you step off the plane with housing, residency, tax office, health cards, schooling, removals and
                much more. We offer this effective service in both Gibraltar and Spain.
            </p>
        </Section>
        <Footer />
    </div>
)

export default Services