import React from 'react'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'

const Cat2AndHepps = ({ history }) => (
    <div className="text-page">
        <Navbar history={history} />
        <Section title="Cat2 and HEPPS">
            <h3 className="left-title">Cat 2</h3>
            <p className="section-text">
                This special tax status is aimed at High Net Worth Individuals with net assets to a net value of at least £2
                million.<br /><br />
    
                The main benefit of this Category 2 status is that tax is only payable on the first £80,000 of taxable income
                and the maximum annual tax liability is £22,000.<br /><br />

                A Category 2 individual needs exclusive use of approved residential accommodation in Gibraltar. They
                must not be a resident in Gibraltar or have been in the previous 5 years and obtained a certificate qualifying
                them as a Cat 2
            </p>

            <h3 className="left-title">HEPPS</h3>
            <p className="section-text">
                This status replaced the Cat 3 & 4 status and is aimed at workers with specialist skills of exceptional
                economic value to Gibraltar, earning more than £120,000 p.a.<br /><br />

                The tax payable by a HEPSS is limited to the first £100,000 of earned income and they may choose
                between the Allowance Based or Gross Income Based Systems.
            </p>
        </Section>
        <Footer />
    </div>
)

export default Cat2AndHepps