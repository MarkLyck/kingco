import React from 'react'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'

const About = ({ history }) => (
    <div className="text-page">
        <Navbar history={history} />
        <Section title="Tax">
            <p className="section-text">
                The assessment and collection of income tax is governed by the Income Tax Act 2010, Rules and
                Regulations<br /><br />
                What you need to know:
            </p>
            <ul>
                <li>Standard rate of tax for an individual is 20%</li>
                <li>Individuals can choose to pay tax under the Allowance Based System or Gross Income Based System</li>
                <li>
                    A pension from a statutory scheme or provident received by an individual who is 60 or more or was compulsory
                    retired at 55 by operation of section 8 (2) of the Pensions Act will be taxed at 0%
                </li>
                <li>There is no Capital Gains Tax</li>
                <li>No Inheritance Tax</li>
                <li>No Wealth Tax</li>
                <li>The rate of Corporation Tax is 10%</li>
            </ul>
            <p className="section-text">
                The assessment and collection of income tax is currently governed by the Income Tax Act 2010, Rules and
                Regulations. That Act was enacted in 2010 and came into effect on 1st January 2011.<br /><br />

                Tax is charged on income accruing in or derived from Gibraltar, on the profits or gains of a company or trust
                from any trade, business, profession or vocation.<br /><br />

                Tax is charged on the income accruing in, derived from or received in Gibraltar (or in any other place) by an
                individual ordinarily resident in Gibraltar from employment or the exercise of any self-employment activities
                in connection with a trade, business, profession or vocation. Dividends, pensions and emoluments of office
                accruing in, derived from or received in any place other than Gibraltar by an ordinarily resident individual
                are also taxable in Gibraltar. Generally, when taxed in the country of accrual and not received in Gibraltar
                such income is not taxable in Gibraltar.<br /><br />

                Tax is charged on income of all individuals and companies in respect of any rents, premiums and any other
                interest in real property located in Gibraltar.<br /><br />

                Income arising outside Gibraltar, which although not actually received or transferred, is obtained in
                Gibraltar by an individual in the form of an equivalent benefit, is treated as having been received in
                Gibraltar.
            </p>

            <h3 className="left-title">Computation of taxable income</h3>
            <p className="section-text">
                Income tax is charged for the year of assessment - running from 1st July in one calendar year to 30th June
                in the next - on the actual basis of the income for that year. The taxpayer's aggregate income, other than
                non-chargeable income, is the "assessable income", and the "taxable income" is the assessable income as
                reduced where appropriate in the case of an individual by the allowances described hereafter.
            </p>

            <h3 className="left-title">Standard rate of tax</h3>
            <p className="section-text">
                The standard rate of tax for individuals is 20%.
            </p>

            <h3 className="left-title">Charge to tax</h3>
            <p className="section-text">
                Individuals may choose to pay tax under the Allowance Based System (ABS) or the Gross Income Based
                System (GIBS).
            </p>

            <h3 className="left-title">Deductions for personal relief under the Allowance Based System</h3>
            <p className="section-text">
                There are a number of allowances and deductions which may be offset against assessable income. It is
                likely that if assessable income exceeds £25,000 pa, then the tax payer should elect to be taxed under the
                Gross Income Based System.<br /><br />

                Deductions for personal relief under the Gross Income Based System
                Under the GIBS, individuals may only claim for the following deductions
            </p>
            <ul>
                <li>Mortgage interest payments up to a maximum of £1,500 pa</li>
                <li>Home Purchase Allowance up to maximum of £6,500</li>
                <li>Contributions to an approved pension scheme up to a maximum of £1,500 pa</li>
                <li>Contributions to an approved medical insurance up to £3,000 pa</li>
            </ul>
            <p className="section-text">
                It is unlikely that the marginal rate of income tax will exceed 25% irrespective of which system the taxpayer elects.
            </p>

            <h3 className="left-title">Pensions</h3>
            <p className="section-text">
                A pension from any statutory pension scheme or provident or other fund approved by the Commissioner
                and received by an individual who is aged 60 or over; or compulsorily retired at age 55 by operation of
                section 8 (2) of the Pensions Act, shall be taxed at 0%.
            </p>

            <h3 className="left-title">Residence</h3>
            <p className="section-text">
                Ordinarily resident when applied to an individual means an individual who irrespective of whether such
                individual is domiciled in Gibraltar or otherwise, in any year of assessment is present in Gibraltar for a
                period of at least 183 days in aggregate or is present in Gibraltar in excess of 300 days in three
                consecutive years. Non-resident means any person other than a person ordinarily resident.
            </p>

            <h3 className="left-title">Corporation tax</h3>
            <p className="section-text">
                The rate of Corporation Tax is 10%. With effect from 1st January 2011 the rate of 10% applies to all
                companies, except utility companies, such as electricity, fuel, telephone services and water providers, and
                companies enjoying and abusing a dominant market position. These companies will pay a higher rate of
                20%.
            </p>

            <h3 className="left-title">Interest and dividends</h3>
            <p className="section-text">
                Interest is not chargeable to tax under the Income Tax Act 2010 unless:<br /><br />
                it is in the course of licensed money lending activities or deposit taking activities as defined in the Financial
                Services (Banking) Act; or<br /><br />
                it is interest on loans by a company to another company in excess of £100,000.<br /><br />
                Dividends paid by a company which is ordinarily resident in Gibraltar are liable to tax in Gibraltar when paid
                to a shareholder who is an individual ordinarily resident in Gibraltar. A tax credit at the rate of tax paid by 
                the company on the profits out of which the dividend is being paid shall be available for set-off against any
                tax that may be charged on that income.
            </p>

            <h3 className="left-title">Gift Aid</h3>
            <p className="section-text">
                If you pay tax in Gibraltar on your income, gains or profits and then make a Gift Aid donation, locally
                registered charities (including ecclesiastical institutions and trusts) can claim back standard rate tax relating
                to that donation directly from the Income Tax Office.
            </p>

            <h3 className="left-title">Capital Gains tax</h3>
            <p className="section-text">
                There is no Capital Gains tax in Gibraltar.
            </p>

            <h3 className="left-title">Inheritance tax</h3>
            <p className="section-text">
                With effect from 1 April 1997, Estate Duty was abolished in Gibraltar.
            </p>

            <h3 className="left-title">Relief in respect of foreign tax paid</h3>
            <p className="section-text">
                A Gibraltar resident who is in receipt of income which is liable to tax in Gibraltar that is derived from and
                has already suffered tax in any other jurisdiction, shall be entitled to unilateral relief in Gibraltar in respect of
                that income, of an amount equal to the tax already deducted or the Gibraltar tax, whichever is the lesser.
                For more help please visit https://www.gibraltar.gov.gi/new/income-tax- office
            </p>
        </Section>
        <Footer />
    </div>
)

export default About